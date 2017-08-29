const {
    GraphQLInterfaceType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
} = require('graphql/type');

const ArticleInterfaceType = new GraphQLInterfaceType({
    name: 'ArticleInterfaceType',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        modelId: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
});

module.exports = ArticleInterfaceType;
