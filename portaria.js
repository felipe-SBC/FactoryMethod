//AINDA INCOMPLETO
//const prompt = require('prompt-sync')();

var FabricaPortaria = function(){
    this.criarPessoa = function(nomePessoa, cargo){
        var pessoa;
        
        if(cargo === "Aluno"){
            pessoa = new Aluno();
        }else if (cargo === "Professor"){
            pessoa = new Professor();
        }else if (cargo === "Coordenador"){
            pessoa = new Coordenador();
        }else if (cargo === "Diretor"){
            pessoa = new Diretor();
        }else if (cargo === "Administrativo"){
            pessoa = new Administrativo();
        }else if (cargo === "Vestibulando"){
            pessoa = new Vestibulando();
        }else{
            pessoa = new NaoPossui();
        }
        pessoa.nome = nomePessoa;
        pessoa.Fale = function(){
            console.log("O "+nomePessoa+" "+this.diga);
        }
        return pessoa.Fale();
    }
}
var Aluno = function(){
    this.diga = "tem relação com a instituição como Aluno";
}
var Professor = function(){
    this.diga = "tem relação com a instituição como Professor";
}
var Coordenador = function(){
    this.diga = "tem relação com a instituição como Coordenador";
}
var Diretor = function(){
    this.diga = "tem relação com a instituição como Diretor";
}
var Administrativo = function(){
    this.diga = "tem relação com a instituição como Administrativo";
}
var Vestibulando = function(){
    this.diga = "tem relação com a instituição como Vestibulando";
}
var NaoPossui = function(){
    this.diga = "não tem nenhuma relação com a instituição, acompanhar até a secretaria";
}

var fabricar = new FabricaPortaria();

var nomePessoa = prompt("Entre com seu nome: ");
var cargo = prompt("Entre com seu cargo: ");
fabricar.criarPessoa(nomePessoa, cargo);