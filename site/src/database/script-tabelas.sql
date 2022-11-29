-- Script de execução do banco de dados
CREATE DATABASE Argos;
USE Argos;

/* Tabela Perfil determina o nível de acesso de determinado usuário, sendo o fkPerfil 1 ("DEV"). 
Quando faz login é direcionado a tela DEV, onde faz o cadastro da empresa e altera a fkPerfil de um usuário comum (fkPerfil 3 "COM") para ADM. 
Após o usuário comprar o nosso produto o DEV irá cadastrar a empresa do usuário na tela de DEV e 
vincular a FkEmpresa ao perfil usuário e alterar a fkPerfil do comprador para ADM,
então o ADM ao logar é direcionado a tela de dashboard com o botão de adicionar usuário. Quando o ADM cadastra uma pessoa através do botão de adicionar usuário,
esse usuário é cadastrado como fkPerfil 3 ("COM"), porém com a fkEmpresa do ADM já atrelada a ele, fazendo com que ao logar,
esse usuário seja direcionado a uma dashboard sem o botão de adicionar usuário. 
OBS: Uma pessoar aletória ao se cadastrar no site é cadastrada com fkPerfil 3 ("COM") e sem fkEmpresa.
Por isso, ao fazer login ela é direcionada a uma dashboard vazia, e por isso a necessidade do DEV alterar o cadastro dessa pessoa para ADM. */

CREATE TABLE Perfil (
idPerfil INT PRIMARY KEY,
Permissao CHAR (3)
);

/* Tabela de Empresa possui os dados de cadastro das empresas após o DEV efetuar seu cadastro dentro da tela de DEV */  
CREATE TABLE Empresa(
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
Nome_Empresa VARCHAR (45) NOT NULL,
Email_Empresa VARCHAR (45) NOT NULL,
CNPJ CHAR (14) NOT NULL
);

/*Tabela de Pessoa contém os dados do cadastro do usuário*/
CREATE TABLE Pessoa (
idPessoa INT PRIMARY KEY AUTO_INCREMENT,
Nome_Pessoa VARCHAR (45) NOT NULL,
Email VARCHAR (45) NOT NULL,
Senha VARCHAR (45) NOT NULL,
fkPerfil INT, 
FOREIGN KEY (fkPerfil) REFERENCES Perfil (idPerfil),
fkEmpresa INT,
FOREIGN KEY(fkEmpresa) REFERENCES Empresa(idEmpresa)
)AUTO_INCREMENT = 1000;

/* Tabela de Torre guarda todos os modelos dos componentes da torre escaneada pelo código python, possuindo fkEmpresa para vincular torre a determinada empresa */														
CREATE TABLE Torre (
idTorre INT PRIMARY KEY auto_increment,
SerialID VARCHAR(9) NOT NULL,
ModeloTorre VARCHAR (45),
ModeloDiscoR VARCHAR(45),
VelocidadeRam VARCHAR(45) NOT NULL,
ModeloProcessador VARCHAR(45) NOT NULL,
SO VARCHAR(45) NOT NULL,
fkEmpresa INT,
FOREIGN KEY (fkEmpresa) REFERENCES Empresa (idEmpresa)
)AUTO_INCREMENT = 1;

/* Tabela de Leitura onde são armazenados as leituras feitas pelo script do python e possui a fkTorre indicando a qual torre pertence a leitura */
CREATE TABLE Leitura (
idLeitura INT PRIMARY KEY AUTO_INCREMENT,
DataHora varchar(30) NOT NULL,
PorcentCPU DECIMAL(4,1) NOT NULL,
QtdProcessadores INT NOT NULL,
RamTotal DECIMAL(7,4) NOT NULL,
RamUsada DECIMAL(7,4) NOT NULL,
PorcentUsoRam DECIMAL(4,1) NOT NULL,
DiscoRTotal DECIMAL(6,3) NOT NULL,
UsoDiscoR DECIMAL(6,3) NOT NULL,
LivreDiscoR DECIMAL(6,3) NOT NULL,
PercentDiscoR DECIMAL(4,1) NOT NULL,
PacotesEnv DECIMAL(6,2) NOT NULL,
PacotesRec DECIMAL(6,2) NOT NULL,
PorcentPerd DECIMAL(4,1) NOT NULL,
vMem DECIMAL(6,3) NOT NULL, -- RAFAELA -> Está coluna foi criada para o projeto individual
BytesRec DECIMAL (6,2) NOT NULL, -- VITOR -> Está coluna foi criada para o projeto individual
ByteEnv DECIMAL (6,2) NOT NULL, -- VITOR -> Está coluna foi criada para o projeto individual
fkTorre INT,
FOREIGN KEY (fkTorre) REFERENCES Torre (idTorre)
)AUTO_INCREMENT = 4000;

CREATE TABLE Temperatura (
idTemp int primary key auto_increment,
temp_min decimal (5,2),
temp_normal decimal (5,2),
temp_max decimal (5,2)
)auto_increment = 5000;

-- RAFAELA -> Tabela criada para o projeto indivudual <-

/* Insert mockado dos perfis */
INSERT INTO Perfil VALUES (1,"Dev"),
                          (2,"Adm"),
                          (3,"Com");

/* Insert mockado de uma empresa para teste de campos */
INSERT INTO Empresa VALUES (1,"SPTech","sptech@comercial.com","11111111111111");

/* Insert mockado de uma Torre para teste de campos */
INSERT INTO Torre VALUES (null,"MSDHA82S","Dell PowerEdge XR12","Sata 3 HD Seagate 2TB","3600","Intel Xeon 3° Geração / 36 núcleos","Linux","1");

/* Insert mockado de uma Leitura para teste de campos */
-- INSERT INTO Leitura VALUES (NULL, '20/08/2022 17:25:22', 25.1, 8, 8.4497, 6.9988, 80.7, 0.987, 0.181, 0.898, 16.7, 897.82, 786.90, 10.7, 0.587, 1);

select * from Leitura;
