import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import expressGraphql from 'express-graphql';

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
    bodyParser.json(),
    expressGraphql({
        schema: Schema,
        graphiql: true
    })
);

app.listen(4000, () => {
    console.info('Server run on 4000');
})