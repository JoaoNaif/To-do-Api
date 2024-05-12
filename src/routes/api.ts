import { Router } from "express";

import * as TodoController from "../controllers/todoController";

const router = Router();

router.get("/ping", TodoController.ping);
router.get("/todos", TodoController.listTodos);
router.post("/todos", TodoController.createTodo);
router.put("/todo/:id", TodoController.updateTodo);
router.delete("/todo/:id", TodoController.deleteTodo);

export default router;
