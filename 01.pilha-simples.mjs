/*
    1. Utilizando o arquivo "PILHA" da pasta "lib".
    Descreva todo o código abaixo a partir do estado da pilha (inicialmente vazia)
    e após cada uma das operações a seguir:
    
    push(5)
    push(9)
    pop()
    push(3)
    push(8)
    pop()
    pop()
    push(6)
    push()
    push(2)
    pop()
    push(10)
    push(1)
    pop()
    pop()
    push(15)
    pop()
    pop()
    
*/

/*
    EXERCÍCIO DE RASTREAMENTO DE PILHA
    ---------------------------------
    Estado inicial: [] (vazia)

    1.  push(5)      ->  Conteúdo: [5]
    2.  push(9)      ->  Conteúdo: [5, 9]
    3.  pop()        ->  Conteúdo: [5]             (Retornou 9)
    4.  push(3)      ->  Conteúdo: [5, 3]
    5.  push(8)      ->  Conteúdo: [5, 3, 8]
    6.  pop()        ->  Conteúdo: [5, 3]          (Retornou 8)
    7.  pop()        ->  Conteúdo: [5]             (Retornou 3)
    8.  push(6)      ->  Conteúdo: [5, 6]
    9.  push()       ->  Conteúdo: [5, 6, undefined] (No JS, push sem argumento insere undefined)
    10. push(2)      ->  Conteúdo: [5, 6, undefined, 2]
    11. pop()        ->  Conteúdo: [5, 6, undefined] (Retornou 2)
    12. push(10)     ->  Conteúdo: [5, 6, undefined, 10]
    13. push(1)      ->  Conteúdo: [5, 6, undefined, 10, 1]
    14. pop()        ->  Conteúdo: [5, 6, undefined, 10] (Retornou 1)
    15. pop()        ->  Conteúdo: [5, 6, undefined] (Retornou 10)
    16. push(15)     ->  Conteúdo: [5, 6, undefined, 15]
    17. pop()        ->  Conteúdo: [5, 6, undefined] (Retornou 15)
    18. pop()        ->  Conteúdo: [5, 6]          (Retornou undefined)

    ESTADO FINAL: [5, 6]
    Topo da pilha: 6
    Base da pilha: 5
*/