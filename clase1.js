function codificar(texto){
    const vocales ={
        a : '1',
        e : '2',
        i : '3',
        o : '4',
        u : '5',
        A : '1',
        E : '2',
        I : '3',
        O : '4',
        U : '5'
    }
    let textcodificado = '';

    for(let caracter of texto){
        if(vocales[caracter]){
            textcodificado += vocales[caracter];
        }else{
            textcodificado += caracter;
        }
    }

    return textcodificado;

}

let texto = 'murcIelago'
let codificado = codificar(texto);

console.log(codificado);