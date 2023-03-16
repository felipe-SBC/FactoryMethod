//AINDA INCOMPLETO
var prompt = require('prompt-sync')();

class Portaria{
    entrar() {}
}

class Aluno extends Portaria{
    entrar(pessoa){
        return "O "+pessoa+" tem relação com a instituição como Aluno"
    }
}

class Professor extends Portaria{
    entrar(pessoa){
        return "O "+pessoa+" tem relação com a instituição como Professor"
    }
}

class Diretor extends Portaria{
    entrar(pessoa){
        return "O "+pessoa+" tem relação com a instituição como Diretor"
    }
}

class Vestibulando extends Portaria{
    entrar(pessoa){
        return "O "+pessoa+" tem relação com a instituição como Vestibulando"
    }
}

class Administrativo extends Portaria{
    entrar(pessoa){
        return "O "+pessoa+" tem relação com a instituição como Administrativo"
    }
}
class NaoPossui extends Portaria{
    entrar(pessoa){
        return "O "+pessoa+" não possui relacionamento com a instituição, acompanhar até a secretaria"
    }
}

var FabricaPortaria = function() {
    this.criarPessoa = function(cargo){
        var pessoa;
        if(cargo === "Aluno"){
            return pessoa = new Aluno();
        }else if(cargo === "Professor"){
            return pessoa = new Professor();
        }else if(cargo === "Diretor"){
            return pessoa = new Diretor()
        }else if(cargo === "Professor"){
            return pessoa = new Vestibulando();
        }else if(cargo === "Administrativo"){
            return pessoa = new Administrativo();
        }else{
            return pessoa = new NaoPossui();
        }
    }
}
var fabricar = new FabricaPortaria();
do{
    var nomePessoa = prompt("Entre com seu nome: ");
    var cargo = prompt("Entre com seu cargo: ")
    pessoa = fabricar.criarPessoa(cargo);
    console.log(pessoa.entrar(nomePessoa));
    var q = prompt("\nDigite Q para sair ou enter para cadastrar uma nova pessoa: ");
    console.log();
} while(q!="Q")