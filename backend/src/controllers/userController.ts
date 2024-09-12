import { Request, Response } from "express";
import { getAllUsers, createUser } from "../services/userService";
import bcrypt from "bcrypt";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error); // Adicionado para ajudar na depuração
    res.status(500).json({ error: "Erro ao buscar usuários." });
  }
};

export const addUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "Email e senha são obrigatórios." });
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser(email, hashedPassword);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error); // Adicionado para ajudar na depuração
    res.status(500).json({ error: "Erro ao criar usuário." });
  }
};
