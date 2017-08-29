const {
    GraphQLObjectType,
    GraphQLString,
} = require('graphql/type');

const BrandType = new GraphQLObjectType({
    name: 'BrandType',
    fields: {
        key: {
            type: GraphQLString,
        },
        name: {
            type: GraphQLString,
        },
        shopUrl: {
            type: GraphQLString,
        },
        logoUrl: {
            type: GraphQLString,
        },
        logoLargeUrl: {
            type: GraphQLString,
        },
    },
});

module.exports = BrandType;
