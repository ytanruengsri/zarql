const { buildSchema } = require('graphql');
const ArticleSchema = require('./article.schema');
const BrandSchema = require('./brand.schema');
const ReviewsSchema = require('./reviews.schema');

const articleSchema = new ArticleSchema();
const brandSchema = new BrandSchema();
const reviewsSchema = new ReviewsSchema();

module.exports = buildSchema(`
    ${articleSchema.typeDefinition}
    ${brandSchema.typeDefinition}
    ${reviewsSchema.typeDefinition}

    type Query {
        ${articleSchema.queryDefinition}
        ${brandSchema.queryDefinition}
        ${reviewsSchema.queryDefinition}
    }

    type Schema {
        query: Query
    }
`);
