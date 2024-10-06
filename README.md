
# StartSolidario - Backend

Este repositorio guarda o backend da aplicação StartSolidario, bem como algumas explicaçoes de como ele funciona

## Documentação - Swagger

Caso tenha pressa e/ou conhecimento na area, segue um link levando ao swagger da aplicação: [Swagger](https://backend-95bj.onrender.com/swagger)

## Estrutura de dados

### O Backend é composto por 4 tableas são elas:

| Nome          | Descrição                           |
| :------------ | :---------------------------------- |
| tb_usuario    | Armazena os dados dos usuarios      |
| tb_viagens    | Armazena as Viagens disponiveis     |
| tb_categorias | Armazena as categorias dos produtos |
| tb_produto    | Armazena os produtos do e-commerce  |

### Vamos nos aprofundar em cada uma delas:
#### tb_usuario: 

| Parâmetro | Tipo     | Anulavel | Descrição |
| :-------- | :------- | :------- | :-------- |
| `id`      | `number` | Não | Chave autoincremental |
| `nome`    | `string` | Não | Nome do Usuario  |
| `idade`   | `Date`   | Não | Data de nascimento do Usuario |
| `cpf`     | `string` | Não | CPF do Usuario   |
| `usuario` | `string` | Não | Email do Usuario |
| `senha`   | `string` | Não | Senha(criptografada) do Usuario |
| `foto`    | `string` | Não | URL da foto de perfil |
| `tipo`    | `string` | Sim | Tipo de Usuario (Administrador ou Comum) |

##### Detalhes e curiosidades:
- A idade é recebida atraves de data americana (MM/DD/YYYY)
- O campo "tipo" não pode ser prenchido atraves dos formularios do Front normalmente, mas existe um "easter egg" que permite a criação de um administrador por lá


#### tb_viagens: 

| Parâmetro      | Tipo     | Anulavel | Descrição |
| :------------- | :------- | :------- | :-------- |
| `id`           | `number` | Não | Chave autoincremental |
| `destino`      | `string` | Não | Destino da viagem  |
| `data_partida` | `string` | Não | Data de partida da viagem |
| `data_retorno` | `string` | Não | Data de retorno da viagem |
| `detalhes`     | `string` | Não | Detalhes da missão, o que o voluntario vai estar fazendo no periodo de trabalho |
| `imagem`       | `string` | Não | URL - Imagem do Destino |

##### Detalhes e curiosidades:
- Apesar da data de partida e retorno serem datas, seu tipo esta marcado como "string", isso acontece pois como esse valor nunca vai ser trabalhado/manipulado como data, sendo apenas exibido em alguns pontos, o programador encarregado quis evitar a dor de cabeça de trabalhar com tipo "Date"


#### tb_categorias: 

| Parâmetro  | Tipo        | Anulavel | Descrição |
| :--------- | :---------- | :------- | :-------- |
| `id`       | `number`    | Não | Chave autoincremental |
| `nome`     | `string`    | Não | Nome da categoria  |
| `imagem`   | `string`    | Não | URL - Imagem/Icon da categoria |
| `produtos` | `Produto[]` | Não | Produtos dessa categoria |

##### Detalhes e curiosidades:
- Existem muitas funçoes de listagem (R - CRUD) não utilizadas relacionadas a essa tabela


#### tb_produto: 

| Parâmetro    | Tipo        | Anulavel | Descrição |
| :----------- | :---------- | :------- | :-------- |
| `id`         | `number`    | Não | Chave autoincremental |
| `nome`       | `string`    | Não | Nome do produto  |
| `tamanho`    | `string`    | Sim | Tamanho do produto |
| `cor`        | `string`    | Sim | Cor do produto |
| `preco`      | `number / decimal` | Não | Preço do produto |
| `quantidade` | `number`    | Sim | Quantidade em estoque do produto |
| `foto`       | `string`    | Não | URL - Imagem do produto |
| `categoria`  | `Categoria` | Não | Categoria do produto |

##### Detalhes e curiosidades:
- O campo "preco" é tanto um number quanto decimal, dependendo de onde ele esta, na tabela é armazenado como decimal mas em outros lugares é convertido e usado como number

##  Onde Fica O Que?

#### Tabelas
- Caminhos URL estão na pasta **controllers** da respctiva tabela
- Estruturas de dados estão na pasta **entities** da respctiva tabela
- Metodos CRUD estão na pasta **services** da respctiva tabela

#### Local e Nuvem
- Para rodar **local**: data/services/**dev.service.ts**
- Para rodar **nuvem**: data/services/**prod.service.ts**

## CRUD (Create - Read - Update - Delete) e Security:

Todas as tabelas, com exeção de "tb_usuario", possuem um CRUD completo e protegidos parcialmente; "tb_usuario" não possui a função de deletar, alem disso apenas os metodos de Criar, Atualizar e Deletar de todas as tabelas são protegidos, permitindo que qualquer usuario veja/liste os dados mas apenas pessoas autenticadas possam altera-los.

## Clonando e Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/StartSolidario/Backend.git
```

Entre no diretório do projeto

```bash
  cd Backend
```

Instale as dependências

```bash
  npm install
```

#### Antes de iniciar o servidor, vai ser necessario alterar o codigo para rodar localmente, siga o passo-a-passo:

<br />

1. Para fazer alterações no código do projeto e executar localmente, no **Visual Studio Code**, abra a **Classe AppModule**, localizada na pasta **src** e **localize a linha indicada na imagem abaixo, que contém a chamada para a Classe ProdService com a configuração do Banco de dados na nuvem**.

<div align="center"> 
<img src="https://i.imgur.com/bdvbvCe.png" title="source: imgur.com" />
</div>

2. Na sequência, substitua a **Classe ProdService** (configuração do Banco de dados da nuvem), pela **Classe DevService** (configuração do Banco de dados local), indicada na imagem abaixo:

<div align="center">
<img src="https://i.imgur.com/ZJcWThI.png" title="source: imgur.com" />
</div>

<br />

**Lembre-se de criar o banco de dados local!**

#### Apos alterações, inicie o servidor:

```bash
  npm run start
```
