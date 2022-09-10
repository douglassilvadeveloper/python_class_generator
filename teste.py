class Pessoa:

    def __init__(self, nome, sobrenome, sexo, nascimento):

        self.__nome = nome
        self.__ sobrenome = sobrenome
        self.__ sexo = sexo
        self.__ nascimento = nascimento

    @property
    def nome(self):
        return self.__nome


    @property
    def sobrenome(self):
        return self.__ sobrenome


    @property
    def sexo(self):
        return self.__ sexo


    @property
    def nascimento(self):
        return self.__ nascimento