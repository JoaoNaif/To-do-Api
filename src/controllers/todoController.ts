import { Request, Response } from "express";
import { Todo } from "../models/Todo";

export const ping = (req: Request, res: Response) => {
  res.json({ pong: true });
};

export const listTodos = async (req: Request, res: Response) => {
  let list = await Todo.findAll();
  res.json({ list });
};

export const createTodo = async (req: Request, res: Response) => {
  let { title, done } = req.body;

  let newTodo = await Todo.create({
    title,
    done,
  });
  res.status(201);
  res.json({ id: newTodo.id, title, done });
};

export const updateTodo = async (req: Request, res: Response) => {
  let { id } = req.params;
  let { done } = req.body;
  let todo = await Todo.findByPk(id);

  if (todo) {
    let nDone = parseInt(done);
    if (nDone === todo.done) {
      res.json({ alert: "valor de Done igual" });
    } else {
      todo.done = nDone;
      await todo.save();
      res.json({ todo });
    }
  } else {
    res.json({ error: "Tarefa não encontrada" });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  let { id } = req.params;
  await Todo.destroy({ where: { id } });
  res.json({ delete: "Tarefa excluida com sucesso" });
};
