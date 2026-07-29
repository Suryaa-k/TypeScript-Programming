const size: number = 5;
const list: number[] = new Array(size);

for (let i = 0; i < size; i++) {
    list[i] = (i + 1) * 10;
}

let output: string = "";
for (let i = 0; i < size; i++) {
    output += list[i] + " ";
}
console.log(output);