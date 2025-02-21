// src/domain/repositories/InMemoryTaskRepository.ts
import { ITaskRepository } from "./ITaskRepository";
import { Task } from "../entities/Task";
import { v4 as uuid } from "uuid";

export class InMemoryTaskRepository implements ITaskRepository {
    private tasks: Task[] = [];

    async getAllTasks(): Promise<Task[]> {
        return this.tasks;
    }

    async createTask(title: string): Promise<Task> {
        const newTask = new Task(uuid(), title, false);
        this.tasks.push(newTask);
        return newTask;
    }

    async updateTask(task: Task): Promise<Task> {
        const index = this.tasks.findIndex((t) => t.id === task.id);
        if (index >= 0) {
            this.tasks[index] = task;
        }
        return task;
    }

    async deleteTask(taskId: string): Promise<void> {
        this.tasks = this.tasks.filter((t) => t.id !== taskId);
    }
}
