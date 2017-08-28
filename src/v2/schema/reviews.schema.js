const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
} = require('graphql/type');

const ReviewsType = new GraphQLObjectType({
    name: 'ReviewsType',
    fields: {
        reviewId: {
            type: GraphQLString,
        },
        articleId: {
            type: GraphQLString,
        },
        articleModelId: {
            type: GraphQLString,
        },
        customerCountry: {
            type: GraphQLString,
        },
        title: {
            type: GraphQLString,
        },
        description: {
            type: GraphQLString,
        },
        created: {
            type: GraphQLString,
        },
        rating: {
            type: GraphQLInt,
        },
    },
});

const ReviewSummariesType = new GraphQLObjectType({
    name: 'ReviewSummariesType',
    fields: {
        articleModelId: {
            type: GraphQLString,
        },
        averageStarRating: {
            type: GraphQLFloat,
        },
        numberOfUserReviews: {
            type: GraphQLInt,
        },
        numberOfUserRecommendations: {
            type: GraphQLInt,
        },
        numberOfUserPositiveRecommendations: {
            type: GraphQLInt,
        },
    },
});

exports.ReviewsType = ReviewsType;
exports.ReviewSummariesType = ReviewSummariesType;
