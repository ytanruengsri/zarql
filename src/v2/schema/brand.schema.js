const {
    GraphQLObjectType,
    GraphQLString,
} = require('graphql/type');

const BrandType = new GraphQLObjectType({
    name: 'BrandType',
    fields: {
        code: {
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

module.exports = BrandType;
