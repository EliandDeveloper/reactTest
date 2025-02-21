// src/domain/entities/Task.ts
export class Task {
    constructor(
        public id: string,
        public title: string,
        public completed: boolean = false
    ) {}
}
