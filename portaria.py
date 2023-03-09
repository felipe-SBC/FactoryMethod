from abc import ABC, abstractmethod;

class portaria(ABC):
    @abstractmethod
    def entrar(self, pessoa):
        pass

class Aluno(portaria):
    def entrar(self, pessoa):
        return f"O {pessoa} tem relação com a instituição como Aluno"

class Professor(portaria):
    def entrar(self, pessoa):
        return f"O {pessoa} tem relação com a instituição como Professor"
    
class Diretor(portaria):
    def entrar(self, pessoa):
        return f"O {pessoa} tem relação com a instituição como Diretor"
    
class Vestibulando(portaria):
    def entrar(self, pessoa):
        return f"O {pessoa} tem relação com a instituição como Vestibulando"
    
class Administrativo(portaria):
    def entrar(self, pessoa):
        return f"O {pessoa} tem relação com a instituição como Administrativo"
    
class NaoPossui(portaria):
    def entrar(self, pessoa):
        return f"O {pessoa} não possui relacionamento com a instituição, acompanhar até a secretaria"

class FabricaPortaria:
    def criarPessoa(self, cargo):
        if cargo =="Aluno":
            return Aluno()
        elif cargo == "Professor":
            return Professor()
        elif cargo == "Diretor":
            return Diretor()
        elif cargo == "Vestibulando":
            return Vestibulando()
        elif cargo=="Administrativo":
            return Administrativo()
        else:
            return NaoPossui()
        
fabricar = FabricaPortaria()
q = " "
while q!="Q":
    nomePessoa = input("Entre com seu nome: ")
    pessoa = fabricar.criarPessoa(input("Qual sua relação com a Fatec: "))
    print(pessoa.entrar(nomePessoa))
    print()
    q = input("Digite Q para sair ou enter para cadastrar uma nova pessoa: ")