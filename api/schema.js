const schema = `
type ReviewSummaries {
  averageStarRating: Int
  numberOfUserReviews: Int
  numberOfUserRecommendations: Int
  numberOfUserPositiveRecommendations: Int
}

type Brand {
  code: String
  name: String
  shopUrl: String
}

type Article {
  configSku: String
  modelSku: String
  name: String
  url: String
  brand: Brand
  summaries: ReviewSummaries
}

type Query {
  article(configSku: String!): Article
  recommendation(configSku: String!): [Article]
}

schema {
  query: Query
}
`;

module.exports = schema;
