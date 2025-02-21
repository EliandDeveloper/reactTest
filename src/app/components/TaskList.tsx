// src/app/components/TaskList.tsx
import React from "react";
import { Task } from "../../domain/entities/Task";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Checkbox,
    IconButton,
    Typography,
    Divider,
    Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface TaskListProps {
    tasks: Task[];
    onToggleCompleted: (task: Task) => void;
    onRemove: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
                                               tasks,
                                               onToggleCompleted,
                                               onRemove,
                                           }) => {
    if (tasks.length === 0) {
        return (
            <Typography variant="body1" color="text.secondary">
                ¡No hay tareas! Agrega una nueva arriba.
            </Typography>
        );
    }

    return (
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {tasks.map((task) => (
                <React.Fragment key={task.id}>
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete" onClick={() => onRemove(task.id)}>
                                <DeleteIcon color="error" />
                            </IconButton>
                        }
                        sx={{
                            backgroundColor: task.completed ? "action.selected" : "transparent",
                            transition: "0.2s",
                        }}
                    >
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={task.completed}
                                onChange={() => onToggleCompleted(task)}
                                tabIndex={-1}
                                disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Box
                                    component="span"
                                    sx={{
                                        textDecoration: task.completed ? "line-through" : "none",
                                    }}
                                >
                                    {task.title}
                                </Box>
                            }
                        />
                    </ListItem>
                    <Divider />
                </React.Fragment>
            ))}
        </List>
    );
};

export default TaskList;
