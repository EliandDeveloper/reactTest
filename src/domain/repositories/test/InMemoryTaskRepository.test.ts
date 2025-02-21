// src/domain/repositories/__tests__/InMemoryTaskRepository.test.ts
import { InMemoryTaskRepository } from "../InMemoryTaskRepository";

describe("InMemoryTaskRepository", () => {
    let repo: InMemoryTaskRepository;

    beforeEach(() => {
        repo = new InMemoryTaskRepository();
    });

    it("should create a task", async () => {
        const task = await repo.createTask("Test Task");
        expect(task.title).toBe("Test Task");

        const allTasks = await repo.getAllTasks();
        expect(allTasks).toHaveLength(1);
    });

    it("should update a task", async () => {
        const task = await repo.createTask("Update Me");
        task.completed = true;
        const updated = await repo.updateTask(task);

        expect(updated.completed).toBe(true);
        expect((await repo.getAllTasks())[0].completed).toBe(true);
    });

    it("should delete a task", async () => {
        const task = await repo.createTask("Delete Me");
        await repo.deleteTask(task.id);

        const allTasks = await repo.getAllTasks();
        expect(allTasks).toHaveLength(0);
    });
});
