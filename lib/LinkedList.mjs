class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

export default class LinkedList {
    #head // inicio da lista ( cabeça );
    #tail // final da lista ( cauda );
    #count // quantidade para saber quantos nós / nodos tem na lista;

    constructor() {
        this.#head = null
        this.#tail = null
        this.#count = 0
    }
    //  getters que restorna se a lista encadeada esta vazia ou nn
    get isEmpty() {
        return this.#count == 0; // se o contador for 0 ent está vazia 
    }

    //getters que retorna a quantidade de elementos da lista 

    get count() {
        return this.#count // retorna a quantidade de nos / nodes que tem na lista 

    }

    // metodo para inserir em qualquer posição
    insert(pos, val) {
        // cria um nodo para armazenar o valor pretendido;
        const inserted = new Node(val);


        // 1º caso: a lista esta vazia;

        if (this.isEmpty) {
            this.#head = inserted
            this.#tail = inserted
        }

        // 2º caso: inserção na primeira posiação;
        else if (pos === 0) {
            inserted.next = this.#head // next liga a lista, ele conecta como oo resto da lista;
            this.#head = inserted
        }
        //3º caso: inserção no final da lista
        else if (this.#count <= pos) {
            this.#tail.next = inserted // aponta o inserted no tail;
            this.#tail = inserted   // tail começar a receber o inserted;

        }

        //4º caso: posição intermediaria
        else {
            let before = this.#head // criando uma variavel para poder percorrer pelo head
            for (let i = 1; i <= pos; i++) {
                before = before.next // ele aponta para o proximo elemento da lista
            }
            let after = before.next

            inserted.next = after

            before.next = inserted
        }

        this.#count ++ // adicionando a quantidade de valores que tem na lista

    }
    //metodo para inserção na primeira (atalho)
    insertHead(val) {
        this.insert(0, val);
    }
    // metodo para inserção na ultima posição( atalho )
    insertTail(val) {
        this.insert(this.#count, val)
    }

    // metodo para remoção de um nodo da lista
    remove(pos) {
        //1º caso a lista esta vazia ou a posição informada esta fora dos limites da lista
        if (this.isEmpty || pos < 0 || pos > this.#count - 1) {
            return undefined
        }

        let removed // criando uma variavel para conseguir desencadear ela;

        // 2º caso: remoção do meu inicio da lista(head)
        if (pos === 0) {
            removed = this.#head // removendo a cabeça da lista

            this.#head = this.#head.next // esotu falando que o proximo numero vai ser o head

            if (this.#count === 1) {
                this.#tail = null
            }
        }

        // 3º caso: remoçao de nodo intermediario ou final;
        else{
            let before =this.#head

            for(let i=0; i< pos; i++){
                before = before.next
            }
            removed = before.next 
            let after = removed.next

            before.next = after

            if(pos === this.#count -1 ){
                this.#tail = before
            }
        }
        this.#count --;
        return removed.data
    }

    removeHead(){
        return this.remove(0)
    }
    removeTail(){
        return this.remove(this.#count -1) 
    }
    indexOf(val){
        // 1º caso: lista vazia;
        if (this.isEmpty){
            return -1 
        }

        let node = this.#head 

        for(let i=0; i< this.#count; i++){
            if(node.data === val){
                return i
            }
        node = node.next
        }
        return -1 // quando retorna -1 é pq o valor nn existe dentro da lista
    }
    //metodo que retorna (sem remover ) um nodo da lista, de acordo com a sua posição.
    peek(pos){
        //1º caso lista vazia ou posição fora dos limites;
        if(this.isEmpty || pos<0 || pos > this.#count -1){
            return undefined;
        }
        //2º caso: busca sequencial 
        let node = this.#head

        for(let i =0; i< pos; i++ ){
            node =  node.next
        }

        return node.data;
    }
    // metodo para retornar ( sem reomover ) o valor do primeiro nodo da lista(atalho)
    peekHead(){
        return this.peek(0)
    }
    peekTail(){
        return this.peek(this.#count-1) // count -1 é o ultimo da lista;
    }

    // metodo para exibição da lista encadeada 
    print(){
        let output =  '( '
        let node = this.#head
        for(let i=0 ; i< this.#count; i++ ){
            if(output !== '( ' )  output += ', '
            output += `[${i}]: ${node.data}`
            node = node.next
        }
        output+=` ), count: ${this.#count}`
        return output;
    }
}