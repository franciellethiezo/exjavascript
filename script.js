/*function somar (a, b){

    return a + b
}

function fazerEscada(material, degraus){
        let escada = material;
        for(let i=0, i < degraus; i++){
            console.log(escada);
            escada += material;
        }
}*/

/*const aleatorio = function (min, max){
    return Math.floor(Math.random()*100);
}*/

const aleatorio = function (min,max){
    return Math.floor(Math.random()*(max-min +1) )+min;
}

Exercicio de emprestimo 

function emprestimo (idade, valor, salario, qtdParcelas){
    if (idade >=22 && idade <=55 && valor>1000 && salario <valor*15){
        console.log  ('Empréstimo aceito');
    }
   /* else if (valor >1000){
        'Verifique salário'
    }
    else if (salario < valor*15){
        'Empréstimo aceito'
    }*/
    else {
        return ('Empréstimo negado');
    }
}
    let montante = valor*(1 + 0.08)**qtdParcelas;
    montante = montante.toFixed (2);
    let parcela = montante/ qtdParcelas;
    parcela = parcela.toFixed(2);
    console.log (`O valor total do empréstimo é de R${montante} e o valor de sua parcela é R${parcela}`)

//montante = capital * (1 + taxa)**parcelas

Exercicio de filmes 

let filmes = [
    {titulo : 'Harry Potter', classificacao: 12},
    {titulo : 'As Branquelas', classificacao: 16},
    {titulo: 'Rei Leão', classificacao: 10},
    {titulo: 'Interestelar', classificacao: 10},
    {titulo: 'Ninja Assassino', classificacao: 18},
    {titulo: 'John Wick', classificacao: 16},
    {titulo: 'Velozes e Furiosos', classificacao: 14},
]
let idade = prompt('Digite sua idade:');

function filme(idade, filmes){
    for(i=0; i < filmes.length; i++ ){
        if(idade >= filmes[i].classificacao){
            alert('Você pode assistir estes filmes:' + filmes[i].titulo);
        }
        else{
            alert('Você não pode assistir à estes filmes:' + filmes[i].titulo);
        }
    }
}
