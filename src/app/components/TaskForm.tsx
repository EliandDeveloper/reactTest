// src/app/components/TaskForm.tsx
import React, { useState } from "react";

interface TaskFormProps {
    onAddTask: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddTask(title);
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                data-testid="task-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a task"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TaskForm;
