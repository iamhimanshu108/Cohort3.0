import express, { json } from "express";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Success",
  });
});

app.post("/api/auth/register", (req, res) => {
  const { email, name, password } = req.body;

  const token = jwt.sign(
    {
      email,
      name,
    },
    "fad6bffd70729b7660f74db0f5c2914e8dd8f499b8a8a33edd051e1c3e8023c3",
  );

  res.status(201).json({
    message: "User Created Successfully",
    data: {
      user: { email, name },
      token,
    },
  });
});

export default app;
