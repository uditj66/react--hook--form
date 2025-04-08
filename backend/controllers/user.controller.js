const prisma = require("../prisma/index");
const jwt = require("jsonwebtoken");
const cookieToken = require("../utils/cookieToken");

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // 1. Create new user
    const newUser = await prisma.user.create({
      data: {
        email,
        password, // 🔐 hash this in production!
      },
    });

    // 2. Generate JWT
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    // 3. Store token in DB
    const updatedUser = await prisma.user.update({
      where: { id: newUser.id },
      data: { jwtToken: token },
    });

    // 4. Send token via cookie + response using updated user
    cookieToken(updatedUser, res);
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ success: false, message: "Signup failed" });
  }
};
