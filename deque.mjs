// o Deque é uma fila de duas pontas, o que seria isso? É uma fila que ela pode ser tanto a saida na frente tanto atrás,
// tipo a fila normal, mas se a ultima pessoa da fila cansar ela sai
// além de fazer o shift para remover o 0, posso remover o de trás, mas também posso colocar na frente, tipo colocar algum dado na posição 0
// é uma lista linear de acesso restrito, NÃO SEGUE o principio FIFO
// a sua principal alicação dos deques são situações em que filas precisam aceitar a inserção de itens prioritários e a desistência do último item
// DEQUE = Double-Ended Queue (fila de duas pontas)
// permite operações de enfileiramente e desfileiramento insertFront/insertBack ou removeFront/removeBack, acontecendo em qualquer uma das extremidades da estrutura.
import Deque from "./lib/Deque.mjs";

let listaCompras = new Deque()
console.log(listaCompras.print())
console.log("Está vazia?\n", listaCompras.isEmpty)

//produtos alimenticios -> inicio 
listaCompras.insertFront("Arroz")
listaCompras.insertFront("Biscoito")
listaCompras.insertFront("Carne")
listaCompras.insertFront("Salgadinho")
console.log(listaCompras.print())

// produtos higiene/limpeza -> final
listaCompras.insertBack("Sabão em Pó")
listaCompras.insertBack("Desodorante")
listaCompras.insertBack("água Sanitária")
listaCompras.insertBack("Amaciante")
console.log(listaCompras.print())

listaCompras.insertFront("Sorvete")
listaCompras.insertFront("Coca-Cola")