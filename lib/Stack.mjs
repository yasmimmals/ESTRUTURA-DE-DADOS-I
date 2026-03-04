// minha classe pilha
export default class Stack {

    #data // vetor privado

    constructor(){
        this.#data = [] // quando eu instancia pela primeira vez, vc vai começar como um vetor vazio
    }
    // método de inserção no vetor 
    // aqui é somente o nome do metodo, pode chamar até yasmim
    inserir(val){
        this.#data.push(val)
    }
    //método para remoção do valor
    tirar(){
        return this.#data.pop()
    }
    //método para consultar o topo da pilha
    peek(){
        return this.#data[this.#data.length-1] //está trazendo o tamanho do vetor
    }

    get isEmpty(){ //saber se a pilha está vazia ou não
        return this.#data.length === 0 // significa verdadeiro, que ela está vazia
    }
    print(){
        return JSON.stringify(this.#data) //convertendo toda a pilha em string
    }
}