class MyList {
    private data: number[];
    private capacity: number;
    public size: number;

    constructor() {
        this.capacity = 2;
        this.size = 0;
        this.data = new Array(this.capacity);
    }

    private resize(): void {
        this.capacity *= 2;
        const newData: number[] = new Array(this.capacity);
        for (let i = 0; i < this.size; i++) newData[i] = this.data[i];
        this.data = newData;
    }

    append(value: number): void {
        if (this.size === this.capacity) this.resize();
        this.data[this.size++] = value;
    }

    insert(index: number, value: number): void {
        if (index < 0 || index > this.size) return;
        if (this.size === this.capacity) this.resize();
        for (let i = this.size; i > index; i--) this.data[i] = this.data[i - 1];
        this.data[index] = value;
        this.size++;
    }

    indexOf(value: number): number {
        for (let i = 0; i < this.size; i++) if (this.data[i] === value) return i;
        return -1;
    }

    removeValue(value: number): void {
        const idx = this.indexOf(value);
        if (idx === -1) return;
        for (let i = idx; i < this.size - 1; i++) this.data[i] = this.data[i + 1];
        this.size--;
    }

    pop(index: number): number {
        if (index < 0 || index >= this.size) return -1;
        const val = this.data[index];
        for (let i = index; i < this.size - 1; i++) this.data[i] = this.data[i + 1];
        this.size--;
        return val;
    }

    reverse(): void {
        let left = 0, right = this.size - 1;
        while (left < right) {
            [this.data[left], this.data[right]] = [this.data[right], this.data[left]];
            left++; right--;
        }
    }

    isEmpty(): boolean { return this.size === 0; }

    print(): void {
        let result = "";
        for (let i = 0; i < this.size; i++) result += this.data[i] + " ";
        console.log(result);
    }
}

const l = new MyList();
l.append(10); l.append(20); l.append(30);
l.print();

l.insert(1, 15);
l.print();

l.removeValue(20);
l.print();

const popped = l.pop(0);
console.log("Popped:", popped);
l.print();

l.reverse();
l.print();

console.log("Size:", l.size, "Empty:", l.isEmpty());