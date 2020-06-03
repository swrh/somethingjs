import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listing users...');

    response.json([
        'John',
        'Jane',
        'Bill',
    ]);
});

app.listen(3000);