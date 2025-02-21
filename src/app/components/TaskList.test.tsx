// src/app/components/__tests__/TaskList.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "./TaskList.tsx";
import { Task } from "../../domain/entities/Task";
import '@testing-library/jest-dom';

describe("TaskList component", () => {
    it("should render tasks and handle toggle", () => {
        const tasks = [new Task("1", "Test 1", false), new Task("2", "Test 2", true)];
        const handleToggle = jest.fn();
        const handleRemove = jest.fn();

        render(<TaskList tasks={tasks} onToggleCompleted={handleToggle} onRemove={handleRemove} />);

        // Check that tasks are in the document
        expect(screen.getByText("Test 1")).toBeInTheDocument();
        expect(screen.getByText("Test 2")).toBeInTheDocument();

        // Toggle first task
        const checkboxes = screen.getAllByRole("checkbox");
        fireEvent.click(checkboxes[0]);
        expect(handleToggle).toHaveBeenCalledWith(tasks[0]);
    });
});
