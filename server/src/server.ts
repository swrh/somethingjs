import express from 'express';

const app = express();

app.use(express.json());

const users = [
    {
        name: 'John Doe',
        email: 'john@doe.com',
    },
    {
        name: 'Jane Doe',
        email: 'jane@doe.com',
    },
    {
        name: 'Baby Doe',
        email: 'baby@doe.com',
    },
    {
        name: 'Johnny Doe',
        email: 'johnny@doe.com',
    },
    {
        name: 'Janie Doe',
        email: 'janie@doe.com',
    },
    {
        name: 'Richard Roe',
        email: 'richard@roe.com',
    },
    {
        name: 'John Roe',
        email: 'john@roe.com',
    },
    {
        name: 'Jane Roe',
        email: 'jane@roe.com',
    },
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);
    const filteredUsers = search ? users.filter(user => user.name.includes(search)) : users;
    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];
    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;
    console.log(data);
    return response.json(users[0]);
});

app.listen(3000);