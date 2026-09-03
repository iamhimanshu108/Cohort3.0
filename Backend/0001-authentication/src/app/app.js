import express from "express";
import jwt from "jsonwebtoken";
import usermodel from "../models/user.model.js";

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
    password,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    "fad6bffd70729b7660f74db0f5c2914e8dd8f499b8a8a33edd051e1c3e8023c3",
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


app.get("/api/auth/me" , async (req, res) => {
  const autthHeader =  req.headers.authorization;

  console.log(autthHeader)

  const data =  jwt.decode(autthHeader)

  console.log(data)

  const user  = await usermodel.findById(data.id)

  console.log(user)
})

export default app;
