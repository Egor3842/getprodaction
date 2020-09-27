
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const cors = require('cors')

const { queryType } = require('./query.js');

const port = 5000;
const app = express();


const schema = new GraphQLSchema({ query: queryType });
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(port);
console.log(`GraphQL Server Running at localhost:${port}`);