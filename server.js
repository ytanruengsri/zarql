const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const schema = require('./api/schema');
const resolvers = require('./api/resolvers');

const PORT = 4000;
const app = express();
const executableSchema = makeExecutableSchema({
    typeDefs: [schema],
    resolvers,
});
const graphQLOptions = {
    schema: executableSchema,
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

app.use('/graphql', graphqlExpress(graphQLOptions));

app.listen(PORT, () => {
    console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
});