const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
} = require('graphql/type');
const DomainType = require('./domain.schema');
const ArticleType = require('./article.schema');
const BrandType = require('./brand.schema');
const { ReviewsType, ReviewSummariesType } = require('./reviews.schema');
const resolveArticle = require('../../resolvers/article.resolver');
const resolveBrand = require('../../resolvers/brand.resolver');
const resolveDomains = require('../../resolvers/domain.resolver');
const { resolveReviews, resolveReviewSummaries } = require('../../resolvers/reviews.resolver');

const QueryType = new GraphQLObjectType({
    name: 'RootType',
    fields: {
        article: {
            type: ArticleType,
            args: {
                articleId: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve(_, args) {
                return resolveArticle(args);
            },
        },
        brand: {
            type: BrandType,
            args: {
                brandId: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve(_, args) {
                return resolveBrand(args);
            },
        },
        reviews: {
            type: new GraphQLList(ReviewsType),
            args: {
                articleId: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve(_, args) {
                return resolveReviews(args);
            },
        },
        reviewSummaries: {
            type: ReviewSummariesType,
            args: {
                modelId: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve(_, args) {
                return resolveReviewSummaries(args);
            },
        },
        domains: {
            type: new GraphQLList(DomainType),
            args: {
                countryCode: {
                    type: GraphQLString,
                },
            },
            resolve(_, args) {
                return resolveDomains(args);
            },
        },
    },
});

const schema = new GraphQLSchema({
    query: QueryType,
});

module.exports = schema;
