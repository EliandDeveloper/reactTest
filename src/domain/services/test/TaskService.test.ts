// src/domain/services/__tests__/TaskService.test.ts
import { TaskService } from "../TaskService";
import { ITaskRepository } from "../../repositories/ITaskRepository";
import { Task } from "../../entities/Task";

describe("TaskService", () => {
    let mockRepo: ITaskRepository;
    let service: TaskService;

    beforeEach(() => {
        mockRepo = {
            getAllTasks: jest.fn(),
            createTask: jest.fn(),
            updateTask: jest.fn(),
            deleteTask: jest.fn(),
        };
        service = new TaskService(mockRepo);
    });

    it("should add a new task", async () => {
        (mockRepo.createTask as jest.Mock).mockResolvedValue(
            new Task("123", "New Task", false)
        );

        const task = await service.addTask("New Task");
        expect(task.title).toBe("New Task");
        expect(mockRepo.createTask).toHaveBeenCalledWith("New Task");
    });

    it("should toggle task completion", async () => {
        const existingTask = new Task("456", "Existing", false);
        (mockRepo.updateTask as jest.Mock).mockResolvedValue(
            new Task("456", "Existing", true)
        );

        const updated = await service.toggleCompleted(existingTask);
        expect(updated.completed).toBe(true);
        expect(mockRepo.updateTask).toHaveBeenCalled();
    });

    it("should remove a task", async () => {
        await service.removeTask("123");
        expect(mockRepo.deleteTask).toHaveBeenCalledWith("123");
    });

    it("should throw error if title is empty", async () => {
        await expect(service.addTask("   ")).rejects.toThrow("Title cannot be empty");
    });
});
