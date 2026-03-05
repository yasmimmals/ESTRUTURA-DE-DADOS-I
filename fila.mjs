// é uma das estruturas que é mais utilizada, por exemplo: desenvolvimento mobile tela sobre tela
// outro exemplo é: o primeiro que chegar é o primeiro que sai
// funciona como principio FIFO - FIRST IN, FIRST OUT
// fila é uma lista linear de acesso restrito, que permite apenas as operações de enfileiramento
// a principaal aplicação das filas são situações que envolvem o processamento de tarefas por ordem de chegada.
import Queue from "./lib/Queue.mjs";

let fila = new Queue()
console.log(fila.print())
console.log("Está vazia? ", fila.isEmpty)
// inserçôes na fila
fila.enqueue("Alexandre")
fila.enqueue("Yasmim")
fila.enqueue("Sofia")
fila.enqueue("Vinicius")

console.log(fila.print())

let proximo = fila.peek()
console.log({proximo})

let atendido = fila.dequeue()
console.log({atendido})
console.log(fila.print())
proximo = fila.peek()   
console.log({proximo})

fila.enqueue("Hugo")
console.log(fila.print())