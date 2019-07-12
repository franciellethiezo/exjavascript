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
