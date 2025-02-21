// src/infrastructure/dependencyInjection.ts
import { InMemoryTaskRepository } from "../domain/repositories/InMemoryTaskRepository";
import { TaskService } from "../domain/services/TaskService";

const taskRepository = new InMemoryTaskRepository();
export const taskService = new TaskService(taskRepository);
