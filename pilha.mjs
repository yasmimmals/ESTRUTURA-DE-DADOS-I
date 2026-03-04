import Stack from './lib/Stack.mjs'

let pilha = new Stack() // instanciei a pilha

console.log(pilha.print())
console.log("Está vazia?", pilha.isEmpty)
pilha.inserir(35)
pilha.inserir(77)
pilha.inserir(19)
console.log(pilha.print())
console.log("Está vazia?", pilha.isEmpty)

let removido = pilha.tirar()
console.log({removido}, pilha.print())