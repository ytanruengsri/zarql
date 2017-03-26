const schema = `
type Article {
  config_sku: String
  model_sku: String
  name: String
  url: String
}

type Query {
  article(config_sku: String!): Article
}

schema {
  query: Query
}
`;

module.exports = schema;