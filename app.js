import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import expressGraphql from 'express-graphql';
import authMiddleware from './middlewares/authCek';
import Schema from './graphql/index';
import config from './helpers/config.env'

mongoose.connect(config.db, {useNewUrlParser: true})
        .then(() => { console.info(`DB connected`) })
        .catch((err) => { console.info(`DB not conncted -> ${err}`) });

const app = express();

app.use(
    '/graphql',
    [
        authMiddleware,
        bodyParser.json()
    ],

    // ### SEND DATA FROM REQ TROUGHT TO ALL RESOLVERS
    expressGraphql(({auth, userId, permissionLevel}) => ({
        schema: Schema,
        context: {
            user: {
                auth,
                userId,
                permissionLevel
            }
        },
        graphiql: true
    }))
);

app.listen(4000, () => {
    console.info('Server run on 4000');
})