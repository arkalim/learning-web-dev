import { RequestHandler } from "express";

import { Todo } from "../models/todo.js";

const Todos: Todo[] = [];

// request handler takes care of all the arg types
export const createTodo: RequestHandler = (req, res, next) => {
    // type cast req.body to tell the TSC that req.body
    // will be an object with a text propety of type string
    const text = (req.body as { text: string }).text;
    const id = Math.random().toString();
    const newTodo = new Todo(id, text);

    Todos.push(newTodo);

    res.status(201).json({ message: "Created new todo", createdTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
    res.status(200).json({
        message: "Successfully fetched Todos",
        todos: Todos,
    });
};

// specifying url params
export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = (req.body as { text: string }).text;
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

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = (req.body as { text: string }).text;
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
