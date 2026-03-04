import Stack from "./Stack.mjs";
// fazendo inversão de dados
let frase = "Socorram-me, subi no ônibus em Marrocos"

let pilha = new Stack()

for(let i = 0; i < frase.length; i++){
    pilha.inserir(frase.charAt(i))
}
console.log(pilha.print())

let reverso = ""
while (!pilha.isEmpty){
    reverso += pilha.tirar()

}
console.log({reverso})
//charart é um metodo, com ele conseguimos percorrer cada caracter