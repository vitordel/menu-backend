# Projeto para o desafio da Tagme

A rede de restaurantes Coco Bambu possui um cardápio tão extenso que a equipe de cada unidade não tem conhecimento profundo sobre todos os itens. Assim, a concepção desse projeto foi elaborar um site que seria acessado na cozinha para que as receitas pudessem ser consultadas e atualizadas com facilidade.

# Especificações

Projeto em Nestjs (Typescript), com Banco de Dados MySQL e ORM TypeORM
Front-end em outro repositório (menu-frontend)

Projeto dividido em algumas pastas:
  - assets - imagens das receitas
  - auth - autenticação
  - config - arquivo de configuração
  - controllers - rotas com seu module
  - core - dtos e entities
  - db - configuração do banco de dados
  - repositories - repositórios com seu module
  - services - serviços com seu module

Alguns arquivos de configuração:
  - env
  - Dockerfile
  - ormconfig.json
  - outros padrão

# Instalação

Clonar o projeto no ambiente, npm install para instalar as dependências

# Funcionamento

Tem um controller '/recipes' com algumas rotas:
  - POST - Criar Receita no Banco
  - GET - Retorna todas as receitas
  - GET /:id - Retorna uma receita pelo id
  - PATCH /:id - Atualiza uma receita pelo id
  - DELETE /:id - Exclui uma receita pelo id

Tem outros 2 controllers:
  - '/content' com rota de trazer arquivo da Aws
  - '/orders' com rotas para pedidos

