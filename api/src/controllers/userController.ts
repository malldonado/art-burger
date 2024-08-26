import { Request, Response } from "express";
import { getAllUsers, createUser } from "../services/userService";

export const getUsers = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  res.json(users);
};

export const addUser = async (req: Request, res: Response) => {
  const { email, name } = req.body;
  const newUser = await createUser(email, name);
  res.status(201).json(newUser);
};
