// src/app/components/TaskList.tsx
import React from "react";
import { Task } from "../../domain/entities/Task";

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
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id} style={{ marginBottom: "8px" }}>
                    <label>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => onToggleCompleted(task)}
                        />
                        {task.title}
                    </label>
                    <button onClick={() => onRemove(task.id)} style={{ marginLeft: "8px" }}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
