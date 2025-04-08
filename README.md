# Full-Stack App (React + Express + MongoDB via Prisma + Zod)

This is a full-stack web application built with a **React frontend**, **Express.js backend**, **MongoDB (via Prisma)** for data persistence, and **Zod** for validation. The app includes authentication, validation, and clean component structure.

---

## 🧰 Tech Stack

### Frontend
- [React](https://reactjs.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- Vite (for fast development)

### Backend
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Prisma](https://www.prisma.io/) (MongoDB support)
- [Zod](https://zod.dev/)

---

## 📁 Project Structure

project-root/ ├── controllers/ # Backend controllers │ └── user.controller.js ├── routes/ # API routes │ └── userRoutes.js ├── schemas/ # Zod validation schemas │
└── signupSchema.js ├── prisma/ # Prisma setup and schema │ ├── schema.prisma │ └── index.js ├── helpers/ # Helper functions (e.g., JWT) │ └── jsonwebtoken.js ├── utils/ # Utilities (e.g., cookie handling) │
└── cookieToken.js ├── src/ # React frontend │ ├── main.jsx │ ├── App.jsx │ └── components/ │ └── LoginForm.jsx


---

## 🛠 Setup Instructions

### 1. Clone the Repository

git clone https://github.com/your-username/your-repo.git
cd your-repo

### 2. Environment Setup
DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/db-name"
PORT=5000
JWT_SECRET="your-secret-key"
### 3.Install Dependencies
### backend
cd backend
npm install
npx prisma generate
### frontend 
cd frontend
npm install
### 4. Run the App
 ### Backend (Express + Prisma)
cd backend 
node index.js
### Frontend (React + Vite)
cd frontend cd internshala assignment
npm run dev
### 5. Prisma & MongoDB
npx prisma db push


































