class Node {
    constructor(val){
        this.data = val
        this.next = null
    }
}

export default class LinkedList{
    #head // inicio da lista (cabeça)
    #tail // final da lista (cauda)
    #count // quantidade de nodos da lista

    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }
    //getter que retorna se a lista está vazia ou não
    get isEmpty(){
        return this.#count === 0
    }


    //getter que retorna a quantidade de elementos da lista
    get count(){
        return this.#count
    }

    // método para inserir em qualquer posição
    insert(pos, val){
        //cria o nodo para armazenar o valor pretendido
        const inserted = new Node(val)

        //1º caso: a lista está vazia
        if(this.isEmpty){
            this.#head = inserted
            this.#tail = inserted
        }

        // 2º caso: inserção na primeira posição
        else if(pos === 0){
            inserted.next = this.#head
            this.#head = inserted
        }
        // 3º caso: inserção no final da lista
        else if(pos >= this.#count){
            this.#tail.next = inserted
            this.#tail = inserted
        }

        // 4º caso: posição intermediária
        else{
            let before = this.#head
            for(let i = 1; i < pos; i++){
                before = before.next
            }
        }
        let after = before.next

        inserted.next = after

        before.next = inserted

        this.#count++
    }
    // método para inserção na primeira posição (atalho)
        insertHead(vol){
            this.insert(0,val)
        }
        insertTail(val){
            this.insert(this.#count, val)
        }
        // método para remoção de um nodo  na lista
        remove(pos){

        //1º caso: A lista está vazia ou a posição informada está fora dos limtes da lista
            if(this.isEmpty || pos < 0 || pos > this.#count -1) {
                return undefined;
            }

            let removed 

            //2º caso: remoção do inicio da lista
            if(pos === 0){
                
            }
        }


}

