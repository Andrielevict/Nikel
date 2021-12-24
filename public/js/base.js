const nome = "Marcelo Eltz";
let nome2 = "";
let pessoadefault = {
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "programador"
}

let nomes = ["Marcelo Eltz", "Maria Silva", "Pedro Silva"]

let pessoasListaVazia = [];

let pessoas = [
{
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "programador"
},
{
    nome: "Maria Silva",
    idade: "25",
    trabalho: "ux/ui designer"
}
];


function alterarnome () {
    nome2 = "Maria Silva";
    console.log("Valor alterado")
    console.log(nome2);
}

function recebeEalteraNome(novoNome){
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome")
    console.log(nome2);
}

function imprimmirpessoa(pessoa) {
    console.log("nome")
console.log (pessoa.nome);

console.log("idade")
console.log (pessoa.idade);

console.log("trabalho")
console.log (pessoa.trabalho);
}


function adicionarPessoa(pessoa){
    pessoas.push(pessoa);
}

function imprimirpessoas(){
    console.log("-----IMPRIMIR PESSOAS-----")
    pessoas.forEach((item) => {
        console.log("nome");
        console.log(item.nome);

        console.log("idade")
        console.log(item.idade);

        console.log("trabalho");
        console.log(item.trabalho);
        })
}

imprimirpessoas();

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "porteiro"
});

imprimirpessoas();
 console.log(pessoas);

//imprimmirpessoa (pessoadefault);

//imprimmirpessoa ( {
//  nome: "Maria Silva",
//idade: "25",
//trabalho: "ux/ui designer"
//});

//recebeEalteraNome ("João Silva Pereira");
//recebeEalteraNome ("Maria Silva");

//alterarnome();