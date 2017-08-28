const bodyParser = require('body-parser');
const express = require('express');
const graphqlHTTP = require('express-graphql');

// V1 - String Schema
// =============================================================================
const schemaV1 = require('./src/v1/schema');
const resolvers = require('./src/resolvers');

// V2 - Javascript Schema
// =============================================================================
const schemaV2 = require('./src/v2/schema');

const PORT = 4000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// REGISTER OUR ROUTES -------------------------------
app.use('/graphql', graphqlHTTP({
    schema: schemaV1,
    graphiql: true,
    rootValue: resolvers,
}));

app.use('/v2-graphql', graphqlHTTP({
    schema: schemaV2,
    graphiql: true,
}));

// START THE SERVER
// =============================================================================
app.listen(PORT, () => {
    console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
});
