# CRUD -Clientes

### Desafio criado utilizando node.js com typescript e banco de dados mysql

A aplicação é um CRUD de clientes onde cada uma destes terá o nome do usuário,email e data de nascimento

### Conceitos e tecnologias utilizadas:

- Node.js
- Typescript
- Express
- Mysql
- TypeORM
- Jest (testes)
- Tsyringe (injeção de dependencias)
- date-fns (manipulação de datas)
- Eslint - prettier - editorconfig (linting e padronização de código)

### Divisão do projeto: 

- Entities 
- Controllers 
- Rotas 
- Repoitories
- Database 
- Services 


## Como utilizar a aplicação:

1. baixe o repositório, abra o terminal na pasta e aplique um `yarn` para baixar as dependencias em sua máquina,

2. Em seguida, abra o arquivo ormconfig.json e substitua as credenciais pelas credenciais do seu banco de dados mysql ou sua imagem do docker, embora o banco esteja com o nome crud, voce pode substituir e criar com o nome que desejar

3. após criar o banco em sua máquina e deixar as credenciais prontas, utilize o comando `yarn typeorm migration:run` em seu terminal para criar as tabelas no banco de dados.

4. agora para iniciar a aplicação é só utilizar o comando `yarn dev:server` para a aplicação rodar na porta 3333

### Recomendo a utilização do insmonia para testas as rotas da aplicação em desenvolvimento

A aplicação possui 5 rotas:
- POST: /cliente passando o nome, email e data de nascimento para criar cliente <br/>
  - requisição: `http://localhost:3333/cliente`<br/>
  - body:
    ``
  {
	"nome": "joão",
	"email": "joão@oi.com",
	"dataDeNascimento": "01/08/1980"
}    
``
  
- GET: /cliente para mostrar todos os clientes cadastrados no banco com *opção* de passar limite por página e a página
  - requisição: `http://localhost:3333/cliente?pagina=1&limite=10` <br/>
  - body: No body <br/>
- GET: /cliente/:id para mostrar um único cliente passando o id deste por routes params
    - requisição: `http://localhost:3333/cliente/1` <br/>
    - body: No body <br/>
- DELETE: /cliente/:id para deletar uma publicação passando id desta por routes params
  - requisição: `http://localhost:3333/cliente/1` <br/>
  - body: No body <br/>
- PUT:/cliente/:id para atualizar dados de uma publicação específica passando as informações a serem atualizadas pelo body
  - requisição: `http://localhost:3333/cliente/1`<br/>
  - body:
    ``
    {
	"nome": "joão",
	"email": "joão@oi.com",
	"dataDeNascimento": "01/08/1980"
  }    
``
## Testes:

  - Para iniciar o jest e testar os services da aplicação(onde fica a lógica da aplicaçã), basta no terminal aplicar um `yarn test` e irá mostrar
  o resultado dos testes. Foram feitos testes unitários apenas.
   - Para ter acesso ao coverage dos testes é necesário,primeiramente, realizar o passo anterior, para criar o coverage e então acessar a pasta coverage na pasta raiz do projeto, acessar a pasta Lcov-report e então abrir o index.html 
  para ter dados sobre o coverage
  
  
  
