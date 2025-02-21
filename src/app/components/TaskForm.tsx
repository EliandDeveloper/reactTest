// src/app/components/TaskForm.tsx
import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

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
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                mb: 3,
            }}
        >
            <TextField
                label="Nueva Tarea"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                size="small"
                sx={{ flexGrow: 1 }}
            />
            <Button type="submit" variant="contained" color="primary">
                Agregar
            </Button>
        </Box>
    );
};

export default TaskForm;
