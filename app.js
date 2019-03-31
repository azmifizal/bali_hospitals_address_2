import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import expressGraphql from 'express-graphql';
import authMiddleware from './middlewares/authCek';
// const authCheck = require('./middlewares/authCek');


import Schema from './graphql/index';

mongoose.connect('mongodb://localhost/portofolio', {useNewUrlParser: true})
        .then(() => { console.info(`DB connected`) })
        .catch((err) => { console.info(`DB not conncted -> ${err}`) });

const app = express();

// app.get('/', (req, res) => {
//     res.send('holaa')
// });

app.use(
    '/graphql',
    [
        authMiddleware,
        bodyParser.json(),
    ],

    // (req, res) => expressGraphql({
    //     schema: Schema,
    //     context: req.auth,
    //     graphiql: true
    // })(req, res)

    expressGraphql((req, res) => ({
        schema: Schema,
        context: {
            auth: req.auth,
            userId: req.userId
        },
        graphiql: true
    }))
);

app.listen(4000, () => {
    console.info('Server run on 4000');
})