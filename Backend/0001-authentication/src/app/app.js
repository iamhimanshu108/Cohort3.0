import express from "express";
import jwt from "jsonwebtoken";
import usermodel from "../models/user.model.js";
import { authentiicate } from "../middleware/auth.middleware.js";
import bycrypt from "bcryptjs";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Success",
  });
});

app.post("/api/auth/register", async (req, res) => {
  const { email, name, password } = req.body;

  const user = await usermodel.create({
    email,
    name,
    password: await bcrypt.hash(password, 10),
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.status(201).json({
    message: "User Created Successfully",
    data: {
      user: {
        email,
        name,
        id: user._id,
      },
    },
    token,
  });
});

app.get("/api/auth/me", authentiicate, async (req, res) => {
  console.log(req.user);

  res.status(200).json({
    data: {
      user: req.user,
    },
  });
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await usermodel.findOne({
    email
  })

  const isValidPassword = await bcrypt.compare(password, user.password);

  if(!isValidPassword) {
    return res.status(400).json({
      message : "Inavlid Email or Password"
    })
  }

  const token = jwt.sign({
    id: user._id
  }, process.env.JWT_SECRET)

  res.status(200).json({
    message: "User logged In ",
    data: {
      user: {
        email: user.email,
        name:  user.name
      }
    },
    token
  })
});

export default app;
