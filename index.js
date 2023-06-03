let fileInput = process.env.FILE_INPUT ? process.env.FILE_INPUT : '/dev/stdin';
let input = require('fs').readFileSync(fileInput, 'utf8');
let lines = input.split('\n');

let currentLine = 0

while (true) {
    let cardsByStack =  Number(lines[currentLine++])
    if (cardsByStack === 0) {
        break
    }

    let inputCards = []
    let inputValues = []

    let stack1 = []
    let stack2 = []
    let stack3 = []


    for (let i = 0; i < cardsByStack; i++) {
        let cards = lines[currentLine++].split(" ");
        stack1.push(Number(cards[0]))
        stack2.push(Number(cards[1]))
        stack3.push(Number(cards[2]))
    }

    console.log ("Pilha 1 - " + stack1)
    console.log ("Pilha 2 - " + stack2)
    console.log ("Pilha 3 - " + stack3)
    console.log (23)



}
