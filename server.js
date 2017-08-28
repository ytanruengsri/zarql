const bodyParser = require('body-parser');
const express = require('express');
const graphqlHTTP = require('express-graphql');

// V1 - String Schema
// =============================================================================
const schemaV1 = require('./src/v1/schema');
const resolversV1 = require('./src/v1/resolvers');

// V2 - Javascript Schema
// =============================================================================

const PORT = 4000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// REGISTER OUR ROUTES -------------------------------
app.use('/graphql', graphqlHTTP({
    schema: schemaV1,
    graphiql: true,
    rootValue: resolversV1,
}));

// START THE SERVER
// =============================================================================
app.listen(PORT, () => {
    console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
});
