// O(1), porque a operação de acesso ao primeiro elementodo array é feita em tempo constante,
// independente do tamanho do array, não percoore o vetor, vai direto no elemento que eu passar para ele

const array = [5,6,7,8,9,2,3,4,1]

function exempleO1(array){
    const inicio = performance.now() // inicializa tempo de performace no vetor
    if (array.length === 0) return null // se o vetor for vazio é null
    const elemento = array[3]
    const fim = performance.now() // finaliza tempo de performace no vetor
    const tempo = fim - inicio 
    console.log(tempo) // calcula tempo 

    const memoriaPilhaMB = (array.length * 4) / (1024 * 1024) // cada elemento tem 4byte e pra converter em mb divide
    let memoriaTotalMB = "N/A"
    if(typeof process !== "undefined" && process.memoryUsage){
        memoriaTotalMB = process.memoryUsage().heapUsed / 1024 / 1024
    }
    console.clear
    console.log("--- Análise de complexidade interativa O(1) ---")
    console.log("Tamanho da entrada: ", array.length)
    console.log("Resultado: ", elemento)
    console.log("Tempo de execução: ",tempo, " MS")
    console.log("Memória estimada da pilha de chamadas: ", memoriaPilhaMB)
    console.log("Memória total usada pelo processo: ", 
        typeof memoriaTotalMB === "number" ? memoriaTotalMB.toFixed(6) + " MB": memoriaTotalMB
    )
}
// exempleO1(array)

// O(log n), porque a cada iteração, valor de i é multiplicado por 2, o que significa que o número de iterações necessárias para que  i atinja "n" é logaritmo em relação a "n"
function exempleLogN(n){
    let i = 1
    while(i < n){
        console.log(i)
        i *= 2 // valor anterior vezes 2 ou seja, i = i * 2
    }
}
// exempleLogN(10)

// O(n),porque a função percorre todos os elementos do array uma vez realizando uma operação constante para cada elemento
function exempleOn(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
    
}
exempleOn(array)