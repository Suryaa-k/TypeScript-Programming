const CAPACITY: number = 10;
const list: number[] = new Array(CAPACITY);
let size: number = 0;

function insert(index: number, value: number): void {
    if (size >= CAPACITY || index < 0 || index > size) return;
    for (let i = size; i > index; i--) {
        list[i] = list[i - 1];
    }
    list[index] = value;
    size++;
}

function deleteAt(index: number): void {
    if (index < 0 || index >= size) return;
    for (let i = index; i < size - 1; i++) {
        list[i] = list[i + 1];
    }
    size--;
}

function search(value: number): number {
    for (let i = 0; i < size; i++) {
        if (list[i] === value) return i;
    }
    return -1;
}

function update(index: number, value: number): void {
    if (index < 0 || index >= size) return;
    list[index] = value;
}

function traverse(): void {
    let result: string = "";
    for (let i = 0; i < size; i++) {
        result += list[i] + " ";
    }
    console.log(result);
}

insert(0, 10);
insert(1, 20);
insert(2, 30);
traverse();

insert(1, 15);
traverse();

deleteAt(2);
traverse();

update(0, 99);
traverse();

console.log("Search 15 -> index " + search(15));