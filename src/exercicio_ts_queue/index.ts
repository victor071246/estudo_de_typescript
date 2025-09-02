class Queue<T> {
    private items: T[] = [];

    enqueue(item: T) {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    peek(): T | undefined {
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}
const numberQueue = new Queue<number>();
numberQueue.enqueue(10);
numberQueue.enqueue(20);
console.log(numberQueue.dequeue());

const stringQueue = new Queue<string>();
stringQueue.enqueue('A');
stringQueue.enqueue('B');
console.log(stringQueue.peek());
