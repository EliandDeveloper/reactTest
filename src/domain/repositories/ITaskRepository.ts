// src/domain/repositories/ITaskRepository.ts
import { Task } from "../entities/Task";

export interface ITaskRepository {
    getAllTasks(): Promise<Task[]>;
    createTask(title: string): Promise<Task>;
    updateTask(task: Task): Promise<Task>;
    deleteTask(taskId: string): Promise<void>;
}
