const {
    GraphQLObjectType,
    GraphQLString,
} = require('graphql/type');

const BrandFamilyType = new GraphQLObjectType({
    name: 'BrandFamilyType',
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
    },
});

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
        brandFamily: {
            type: BrandFamilyType,
        },
    },
});

module.exports = BrandType;
