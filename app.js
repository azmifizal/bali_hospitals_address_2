const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressGraphql = require('express-graphql');
const authMiddleware = require('./middlewares/authCek');
const Schema = require('./graphql/index');
const config = require('./helpers/config.env');

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

app.listen(process.env.PORT || 4000, () => {
    console.info('Server run!');
})