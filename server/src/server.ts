import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

// Rota:  Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// Verbos HTTP
// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end
// Exemplos:
// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados de um usuário especifico

// Tipos de parâmetros
// Request Params: Parametros que vem na propria rota que identificam um recurso
// Query Params: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
// Request Body: Parâmetros no corpo da requisição para criar/atualizar informações

// Banco de dados
// SELECT = FROM users WHERE name = 'Cristian"
// knex('users').where('name', 'Diego').select('*')

app.listen(3333);