/*
    1. Veja, na imagem "Torre-De-Hanoi-4-Discos.png", como funciona o jogo das Torres de Hanoi com 4 discos.

    2. Cada uma das torres do jogo se comporta como uma pilha.

    3. Em hipótese alguma, um disco maior pode ficar sobre um disco menor.

    3. Importe a classe apropriada "PILHA" da pasta "lib" e crie três pilhas, representando as três torres.
    
    4. Comece o jogo com os 4 discos na TorreB conforme a imagem "Torre-De-Hanoi-4-Discos.png", nesta ordem [1,2,3,4].

    5. Implemente o método correto que move um disco de uma torre para outra.

    6. Finalize o jogo com os 4 discos na TorreA. Use o método print() para exibir as três pilhas ANTES e DEPOIS,
    conforme a imagem "Torre-Impressao.png". DEPOIS das movimentações, a TorreA deve estar com os discos na
    ordem [1,2,3,4] e as outras duas torres (TorreB e TorreC) devem estar vazias.
*/
/* ATIVIDADE: TORRE DE HANÓI (4 DISCOS)
    Aluno: Simulação de Estudante
    Matéria: Estrutura de Dados - Pilha (LIFO)
*/

import Stack from './lib/Stack.mjs';

// 3. Criando as torres como instâncias da classe Stack
const torreA = new Stack();
const torreB = new Stack();
const torreC = new Stack();

// 4. Começando o jogo: discos na TorreB
// Lógica: O maior (1) entra primeiro para ficar na base, o menor (4) por último no topo
torreB.push(1);
torreB.push(2);
torreB.push(3);
torreB.push(4);

// Print pra ver como a torre tá
console.log('--- ANTES (Torre B cheia) ---');
console.log('Torre A:', torreA.print());
console.log('Torre B:', torreB.print()); 
console.log('Torre C:', torreC.print());

// 5. Função 'Mover': tira de uma (pop) e coloca na outra (push)
// Importante: pop() sempre pega o que está no topo 
function moverDisco(origem, destino) {
    destino.push(origem.pop());
}


moverDisco(torreB, torreC); // Disco 4 vai passear na C
moverDisco(torreB, torreA); // Disco 3 vai para a A
moverDisco(torreC, torreA); // Disco 4 fica em cima do 3 na A
moverDisco(torreB, torreC); // Disco 2 vai para a C
moverDisco(torreA, torreB); // Tira o 4 da frente para mover o 3
moverDisco(torreA, torreC); // Disco 3 senta em cima do 2 na C
moverDisco(torreB, torreC); // Disco 4 vai para cima de todo mundo na C
moverDisco(torreB, torreA); // Disco 1 chegou na base do A
moverDisco(torreC, torreA); // Disco 4 volta para a A
moverDisco(torreC, torreB); // Disco 3 vai para a B
moverDisco(torreA, torreB); // Disco 4 vai para a B (liberando o 2)
moverDisco(torreC, torreA); // Disco 2 vai para a base da A (sobre o 1)
moverDisco(torreB, torreC); // Disco 4 vai para a C
moverDisco(torreB, torreA); // Disco 3 vai para a A (sobre o 2)
moverDisco(torreC, torreA); // Disco 4 fecha a torre na A

// Exibindo o resultado final esperado
console.log('\n--- DEPOIS (Missão Cumprida na Torre A) ---');
console.log('Torre A:', torreA.print());
console.log('Torre B:', torreB.print()); // Vazia
console.log('Torre C:', torreC.print()); // Vazia

/*
    Anotações de estudo:
    - Usei o pop() para tirar e o push() para inserir conforme a regra LIFO.
    - O array final [1,2,3,4] mostra que o 4 é o topo (último a entrar).
*/