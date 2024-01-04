alert("hello world")


function soma (a , b){
    return a + b
}

console.log(soma(5 , 2))


function tipoNumber(a){
    let tipo = typeof(a)

    tipo === "number" ? console.log( "É um número") : console.log("Não é um número")
}

tipoNumber(8)

function tipoString(a){
    let tipo = typeof(a)

    tipo === "string" ? console.log( "É uma string") : console.log("Não é uma string")
}
tipoString("a")


function tipoBoolean(a){
    let tipo = typeof(a)

    tipo === "boolean" ? console.log( "É um booleano") : console.log("Não é um booleano")
}
tipoBoolean(true)


function subtracao (a , b){
    return a - b
}

console.log(subtracao(5 , 2))


function mutiplicacao (a , b){
    return a * b
}

console.log(mutiplicacao(5 , 2))

function divisao (a , b){
    return a / b
}

console.log(divisao(5 , 2))


function par (a){
    let sobra = a % 2;
    return sobra === 0 ? "É um número par" : "Não é um número par"
}

console.log(par(6))



function impar (a){
    let sobra = a % 2;
    return sobra === 1 ? "É um número ímpar" : "Não é um número ímpar"
}

console.log(par(7))