import { Router } from "express";
import { createTodo, getTodos, updateTodo, deleteTodo, } from "../controllers/todos.js";
const router = Router();
router.route("/").get(getTodos).post(createTodo);
router.route("/:id").put(updateTodo).delete(deleteTodo);
export default router;
