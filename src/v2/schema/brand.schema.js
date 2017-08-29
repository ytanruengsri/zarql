const {
    GraphQLObjectType,
    GraphQLString,
} = require('graphql/type');

// Custom Types
const UrlType = require('../types/url.type');

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
            type: UrlType,
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
            type: UrlType,
        },
        logoUrl: {
            type: UrlType,
        },
        logoLargeUrl: {
            type: UrlType,
        },
        brandFamily: {
            type: BrandFamilyType,
        },
    },
});

module.exports = BrandType;
