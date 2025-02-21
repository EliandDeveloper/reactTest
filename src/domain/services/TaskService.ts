// src/domain/services/TaskService.ts
import { ITaskRepository } from "../repositories/ITaskRepository";
import { Task } from "../entities/Task";

export class TaskService {
    constructor(private taskRepository: ITaskRepository) {}

    async getTasks(): Promise<Task[]> {
        return this.taskRepository.getAllTasks();
    }

    async addTask(title: string): Promise<Task> {
        if (!title.trim()) {
            throw new Error("Title cannot be empty");
        }
        return this.taskRepository.createTask(title.trim());
    }

    async toggleCompleted(task: Task): Promise<Task> {
        task.completed = !task.completed;
        return this.taskRepository.updateTask(task);
    }

    async removeTask(taskId: string): Promise<void> {
        return this.taskRepository.deleteTask(taskId);
    }
}
