import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World'});
})

export default routes;

// routes.get('/users', (request, response) => {
//   const search = String(request.query.search);

//   const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
  
//   return response.json(filteredUsers);
// })

// routes.get('/users/:id', (request, response) => {
//   const id  = Number(request.params.id);

//   const user = users[id];
//   return response.json(user);
// })

// routes.post("/users", (request, response)=>{
//   const data = request.body;

//   const user = {
//     name: data.name,
//     email: data.email,
//   };

//   return response.json(user);
// })