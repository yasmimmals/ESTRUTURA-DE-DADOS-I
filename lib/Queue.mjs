export default class Queue{

    #data //Vetor privado

    constructor(){
        this.#data = []
    }
// método de inserção na fila
    enqueue(val){
        this.#data.push(val)
    }
    // método de remoção na fila
    dequeue(){ // naõ precisa passar parametro
        return this.#data.shift() //shift remove na primeira posição e o unshift coloca na primeira posição
    }

    //método para consultar o inicio da fila sem remover um elemento
    peek(){
        return this.#data[0]
    }
    get isEmpty(){
        return this.#data.length === 0
    }
    // método para imprimir a fila(efeitos de depuração)
    print(){
        let output = '[ '
        for(let i=0; i<this.#data.length; i++){//concatenação do print
            if(output !== "[ "){
                output += ", " // se for igual significa que está vazia, mas se tiver dentro por exemplo "Ale" eu quero colocar uma , e um espaço para concatenar o próximo
            }
            output += `(${i}): ${this.#data[i]}`
        }
        return output + " ]"
    }


}