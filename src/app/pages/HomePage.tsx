// src/app/pages/HomePage.tsx
import React, { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { Task } from "../../domain/entities/Task";
import { taskService } from "../../infrastructure/dependencyInjection";
import { Container, Typography, Box } from "@mui/material";

const HomePage: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const loadTasks = async () => {
        const data = await taskService.getTasks();
        setTasks(data);
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const handleAddTask = async (title: string) => {
        const newTask = await taskService.addTask(title);
        setTasks((prev) => [...prev, newTask]);
    };

    const handleToggleCompleted = async (task: Task) => {
        const updated = await taskService.toggleCompleted(task);
        setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
    };

    const handleRemoveTask = async (taskId: string) => {
        await taskService.removeTask(taskId);
        setTasks((prev) => prev.filter((t) => t.id !== taskId));
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Task Manager
            </Typography>

            <TaskForm onAddTask={handleAddTask} />

            <Box sx={{ mt: 2 }}>
                <TaskList
                    tasks={tasks}
                    onToggleCompleted={handleToggleCompleted}
                    onRemove={handleRemoveTask}
                />
            </Box>
        </Container>
    );
};

export default HomePage;
