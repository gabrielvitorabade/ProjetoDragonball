# 🐉 Projeto Dragon Ball

Uma aplicação web inspirada no universo Dragon Ball, desenvolvida para praticar habilidades de front-end e back-end com foco em integração de APIs, estilização e estrutura modular.

## 🚀  Tecnologias Utilizadas

Front-end

 ⚛️ React.js — Interface dinâmica e componentizada
 
 🎨 CSS3 — Estilização responsiva e visual moderno
 
 🧱 HTML5 — Estrutura semântica
 
Back-end

 🟨 Node.js — Ambiente de execução JavaScript
 
 🔌 Express.js — Criação de rotas e servidor HTTP
 
 📦 Axios / Fetch — Consumo de APIs externas
 
Outros

 🗃️ Git & GitHub — Controle de versão
 
 🧪 Vite / Webpack — Empacotamento e otimização
 
 🌐 API Dragon Ball — Fonte de dados dos personagens

📦 Estrutura do Projeto

ProjetoDragonball/
├── front/           # Interface do usuário
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
├── back/            # Servidor e lógica de API
│   ├── routes/
│   ├── controllers/
│   └── server.js



✨ Funcionalidades
- 🔍 Busca de personagens por nome
- 📄 Listagem completa com imagens e descrições
- 🧠 Filtro por raça, poder ou universo (em construção)
- 💾 Persistência de favoritos (localStorage ou backend) (em construção)
- 📱 Design responsivo para mobile e desktop
- ⚙️ Integração com API externa para dados dinâmicos

 
## 🧠 Desafios Enfrentados
1. Integração com API Externa
- Lidar com inconsistências nos dados da API Dragon Ball.
- Implementar tratamento de erros e loading states para melhorar a experiência do usuário.
- Paginar resultados e otimizar chamadas para evitar sobrecarga.
2. Estrutura Modular
- Separar responsabilidades entre componentes, páginas e serviços.
- Criar rotas RESTful no backend para manipulação de favoritos e filtros.
- Garantir escalabilidade e legibilidade do código.
3. Persistência de Dados
- Implementar localStorage para favoritos no front-end.
- Criar endpoints no back-end para salvar e recuperar dados persistentes.
4. Estilização Responsiva
- Adaptar layout para diferentes tamanhos de tela.
- Utilizar media queries e flexbox/grid para garantir fluidez.
  
## 📦 Como Rodar o Projeto Localmente

Pré-requisitos

- Node.js instalado
- Git instalado
Passos
### Clone o repositório
git clone https://github.com/gabrielvitorabade/ProjetoDragonball

### Acesse a pasta do front-end
cd ProjetoDragonball/front
npm install
npm run dev

### Em outro terminal, acesse o back-end
cd ProjetoDragonball/back
npm install
node server.js


## 🧪 Testes e Melhorias Futuras

- ✅ Implementar testes unitários com Jest
- 🧭 Adicionar paginação na listagem
- 🔐 Autenticação de usuário
  

Feito por Gabriel Vitor Abade

