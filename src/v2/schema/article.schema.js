const {
    GraphQLObjectType,
    GraphQLString,
} = require('graphql/type');

const ArticleType = new GraphQLObjectType({
    name: 'ArticleType',
    fields: {
        id: {
            type: GraphQLString,
        },
        modelId: {
            type: GraphQLString,
        },
        name: {
            type: GraphQLString,
        },
        shopUrl: {
            type: GraphQLString,
        },
    },
});

module.exports = ArticleType;
