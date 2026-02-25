
// só quem intancia essa classe é quem tem acesso a base, o # deixa privado e só acessamos com get e set
class FormaGeometrica{

    #base
    #altura
    #tipo 

    // constructor(base, altura, tipo){
    //     this.#base = base
    //     this.#altura = altura
    //     this.#tipo = tipo
    // }

    get base(){
        return this.#base
    }
    get altura(){
        return this.#altura
    }
    get tipo(){
        return this.#tipo
    }

    set base(valor){
        if(typeof valor !== 'number' || valor <= 0){
            throw new Error("ERRO: a base precisa ser númerica e maior que zero.")
        }
        this.#base = valor
    }
    set altura(valor){
        if(typeof valor !== 'number' || valor <= 0){
            throw new Error("ERRO: a altura precisa ser númerica e maior que zero.")
        }
        this.#altura = valor
    }
    set tipo(valor){
        if(!["R", "T", "E"].includes(valor.toUpperCase())){
            throw new Error("ERRO: o tipo precisa ser um dos valores: R, T ou E.")
        }
        this.#tipo = valor.toUpperCase()
    }

    calcArea(){
        switch(this.#tipo){
            case "R":
                return this.#base * this.#altura
            case "T":
                return (this.#base * this.#altura) / 2
            case "E":
                return (this.#base / 2) * (this.#altura / 2) * Math.PI
        }
    }

}