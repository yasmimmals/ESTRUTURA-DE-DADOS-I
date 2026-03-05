export default class Deque{
    #data // vetor privado

    constructor(){
        this.#data - []
    }

    // método para inserir dados no inicio da estrutura
    insertFront(val){
        this.#data.unshift(val) // posição 0
    }

    // método para inserir dados no final da estrutura
    insertBack(val){
        this.#data.push(val) // push insere no final
    }

    // método para remover dados no inicio da estrutura
    removeFront(val){
        return this.#data.shift() //shift remove no inicio
    }

    // método para remover dados no final da estrutura
    removeBack(val){
        return this.#data.pop(val) // pop remove no final
    }

    // método para consultar o inicio da estrutura
    peekFront(){
        return this.#data[0]
    }

    // método para consultar o final da estrutura
    peekBack(){
        return this.#data[this.#data.length - 1]
    }

    get isEmpty(){
        return this.#data.length === 0 ? "Sim, está vazia" : "Não"
    }

       // método para imprimir a fila(efeitos de depuração)
    print(){
        let output = '[ '
        for(let i=0; i<this.#data.length; i++){//concatenação do print
            if(output !== "[ "){
                output += ", " // se for igual significa que está vazia, mas se tiver dentro por exemplo "Ale" eu quero colocar uma , e um espaço para concatenar o próximo
            }
            output += `(${i+1}º): ${this.#data[i]}`
        }
        return output + " ]"
    }
    
}