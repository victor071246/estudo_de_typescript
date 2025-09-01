enum Category {
    STUDY = 'Study',
    WORK = 'Work',
    PERSONAL = 'Personal',
    HEALTH = 'Health',
}

class User {
    constructor(
        public id: number,
        public name: string,
        public email: string,
    ) {}
}

class Task {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public category: Category,
        public assignedTo: User,
        public completed: boolean = false,
    ) {}

    markAsDone() {
        this.completed = true;
    }

    toString(): string {
        return `[${this.completed ? '✔' : ' '}] ${this.title} - ${
            this.category
        } (Assigned to: ${this.assignedTo.name})`;
    }
}

// ==== Simulação de uso ====

// Criando usuários
const user1 = new User(1, 'Victor', 'victor@email.com');
const user2 = new User(2, 'Ana', 'ana@email.com');

// Criando tarefas
const tasks: Task[] = [
    new Task(1, 'Estudar TypeScript', 'Praticar classes e interfaces', Category.STUDY, user1),
    new Task(2, 'Finalizar relatório', 'Enviar até sexta', Category.WORK, user2),
    new Task(3, 'Ir à academia', 'Treino de pernas', Category.HEALTH, user1),
];

// Marcando uma tarefa como concluída
tasks[0].markAsDone();

// Exibindo todas as tarefas
tasks.forEach((task) => console.log(task.toString()));
