import express from "express";
import todoRoutes from "./routes/todos.js";
const app = express();
app.use(express.json());
app.use("/todos", todoRoutes);
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});
app.listen(5000);
