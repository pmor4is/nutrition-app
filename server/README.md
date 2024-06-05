# Nutri-App Server

### Criando um projeto igual: 
Realizar os passos abaixo: 
~~~ bash
npm init [y-]
~~~
Criar na pasta de projetos, na raiz, os arquivos: index.js, config.js, .env, .gitignore

#### Bibliotecas instaladas: 
~~~ bash
npm install express dotenv cors body-parser pg
# Node monitor
npm install --save-dev nodemon
~~~

#### Arquivo dotenv e .gitignore
Criar o arquivo .env com as configurações de porta
~~~ bash
# Configurações para o express local
PORT=9082
# Configurações para o postgreeSQL remoto
pgConnection = "<urlConexao>"
~~~
Criar o arquivo .gitignore com as configurações o que ignorar ao levar para o GitHub
~~~ 
.env
node_modules
~~~

#### Deixar o servidor online: 
~~~ bash
npm start
~~~