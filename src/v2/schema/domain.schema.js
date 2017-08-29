const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
} = require('graphql/type');

// Custom Types
const UrlType = require('../types/url.type');

const DomainType = new GraphQLObjectType({
    name: 'DomainType',
    fields: {
        languageCode: {
            type: GraphQLString,
        },
        countryCode: {
            type: GraphQLString,
        },
        currencyCode: {
            type: GraphQLString,
        },
        taxRate: {
            type: GraphQLFloat,
        },
        rootCategoryKey: {
            type: GraphQLString,
        },
        shopUrl: {
            type: UrlType,
        },
    },
});

module.exports = DomainType;
