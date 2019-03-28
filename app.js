import express from 'express';

const app = express();

app.use('/', (req, res) => {
    res.send('holaa')
});

app.listen(4000, () => {
    console.info('Server run on 4000');
})