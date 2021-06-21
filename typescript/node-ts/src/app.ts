import express, { Request, Response, NextFunction } from "express";

import todoRoutes from "./routes/todos.js";

const app = express();
app.use(express.json());

// append prefix /todos to all the routes
app.use("/todos", todoRoutes);

// error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ error: err.message });
});

app.listen(5000);
