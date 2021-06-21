import { Todo } from "../models/todo.js";
const Todos = [];
export const createTodo = (req, res, next) => {
    const text = req.body.text;
    const id = Math.random().toString();
    const newTodo = new Todo(id, text);
    Todos.push(newTodo);
    res.status(201).json({ message: "Created new todo", createdTodo: newTodo });
};
export const getTodos = (req, res, next) => {
    res.status(200).json({
        message: "Successfully fetched Todos",
        todos: Todos,
    });
};
export const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = Todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        res.status(500).json({ message: "Cound not find todo" });
    }
    Todos[todoIndex] = new Todo(todoId, updatedText);
    res.status(201).json({
        message: "Successfully updated todo",
        updatedTodo: Todos[todoIndex],
    });
};
export const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = Todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        res.status(500).json({ message: "Cound not find todo" });
    }
    Todos.splice(todoIndex, 1);
    res.status(201).json({
        message: "Successfully deleted todo",
        Todos: Todos,
    });
};
