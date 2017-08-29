const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLBoolean,
} = require('graphql/type');

const ArticleSizeRatingType = new GraphQLObjectType({
    name: 'ArticleSizeRatingType',
    fields: {
        OVERALL: {
            type: GraphQLInt,
        },
        CHEST: {
            type: GraphQLInt,
        },
        SLEEVES: {
            type: GraphQLInt,
        },
        SHOULDERS: {
            type: GraphQLInt,
        },
        LENGTH: {
            type: GraphQLInt,
        },
        LEG_FIT: {
            type: GraphQLInt,
        },
        SHOE_WIDTH: {
            type: GraphQLInt,
        },
        BOOTLEG_WIDTH: {
            type: GraphQLInt,
        },
        HIPS_OR_REAR: {
            type: GraphQLInt,
        },
        CUP_SIZE: {
            type: GraphQLInt,
        },
        CHEST_GIRTH: {
            type: GraphQLInt,
        },
        COLLAR_SIZE: {
            type: GraphQLInt,
        },
    },
});

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
        recommend: {
            type: GraphQLBoolean,
        },
        helpfulCount: {
            type: GraphQLInt,
        },
        unhelpfulCount: {
            type: GraphQLInt,
        },
        articleSizeRatings: {
            type: ArticleSizeRatingType,
        },
    },
});

const StarRatingDistributionType = new GraphQLObjectType({
    name: 'StarRatingDistributionType',
    fields: {
        fiveStar: {
            type: GraphQLInt,
        },
        fourStar: {
            type: GraphQLInt,
        },
        threeStar: {
            type: GraphQLInt,
        },
        twoStar: {
            type: GraphQLInt,
        },
        oneStar: {
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
        starRatingDistribution: {
            type: StarRatingDistributionType,
        },
        articleSizeRatings: {
            type: ArticleSizeRatingType,
        },
    },
});

exports.ReviewsType = ReviewsType;
exports.ReviewSummariesType = ReviewSummariesType;
