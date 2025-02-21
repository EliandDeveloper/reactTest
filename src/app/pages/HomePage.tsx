// src/app/pages/HomePage.tsx
import React, { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { Task } from "../../domain/entities/Task";
import { taskService } from "../../infrastructure/dependencyInjection";

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
        await taskService.addTask(title);
        loadTasks();
    };

    const handleToggleCompleted = async (task: Task) => {
        await taskService.toggleCompleted(task);
        loadTasks();
    };

    const handleRemoveTask = async (taskId: string) => {
        await taskService.removeTask(taskId);
        loadTasks();
    };

    return (
        <div style={{ maxWidth: 500, margin: "auto" }}>
    <h1>Task Manager</h1>
    <TaskForm onAddTask={handleAddTask} />
    <TaskList
    tasks={tasks}
    onToggleCompleted={handleToggleCompleted}
    onRemove={handleRemoveTask}
    />
    </div>
);
};

export default HomePage;
