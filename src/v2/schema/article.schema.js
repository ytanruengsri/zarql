const {
    // GraphQLScalarType,
    GraphQLObjectType,
    GraphQLEnumType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean,
} = require('graphql/type');

const BrandType = require('./brand.schema');

const AgeGroupEnumType = new GraphQLEnumType({
    name: 'AgeGroupEnumType',
    values: {
        BABY: {
            value: 'BABY',
        },
        CHILD: {
            value: 'CHILD',
        },
        TEEN: {
            value: 'TEEN',
        },
        ADULT: {
            value: 'ADULT',
        },
    },
});

const GenderEnumType = new GraphQLEnumType({
    name: 'GenderEnumType',
    values: {
        MALE: {
            value: 'MALE',
        },
        FEMALE: {
            value: 'FEMALE',
        },
    },
});

const MediaEnumType = new GraphQLEnumType({
    name: 'MediaEnumType',
    values: {
        NON_MODEL: {
            value: 'NON_MODEL',
        },
        MODEL: {
            value: 'MODEL',
        },
        STYLE: {
            value: 'STYLE',
        },
        PREMIUM: {
            value: 'PREMIUM',
        },
        UNDEFINED: {
            value: 'UNDEFINED',
        },
    },
});

const ArticlePriceType = new GraphQLObjectType({
    name: 'ArticlePriceType',
    fields: {
        currency: {
            type: GraphQLString,
        },
        value: {
            type: GraphQLString,
        },
        formatted: {
            type: GraphQLString,
        },
    },
});

const ArticleImageType = new GraphQLObjectType({
    name: 'ArticleImageType',
    fields: {
        orderNumber: {
            type: GraphQLInt,
        },
        type: {
            type: MediaEnumType,
        },
        thumbnailHdUrl: {
            type: GraphQLString,
        },
        smallUrl: {
            type: GraphQLString,
        },
        smallHdUrl: {
            type: GraphQLString,
        },
        mediumUrl: {
            type: GraphQLString,
        },
        mediumHdUrl: {
            type: GraphQLString,
        },
        largeUrl: {
            type: GraphQLString,
        },
        largeHdUrl: {
            type: GraphQLString,
        },
    },
});

const ArticleMediaType = new GraphQLObjectType({
    name: 'ArticleMediaType',
    fields: {
        images: {
            type: new GraphQLList(ArticleImageType),
        },
    },
});

const ArticleUnitType = new GraphQLObjectType({
    name: 'ArticleUnitType',
    fields: {
        id: {
            type: GraphQLString,
        },
        size: {
            type: GraphQLString,
        },
        price: {
            type: ArticlePriceType,
        },
        originalPrice: {
            type: ArticlePriceType,
        },
        available: {
            type: GraphQLBoolean,
        },
        stock: {
            type: GraphQLInt,
        },
    },
});

const ArticleAttributeType = new GraphQLObjectType({
    name: 'ArticleAttributeType',
    fields: {
        name: {
            type: GraphQLString,
        },
        values: {
            type: new GraphQLList(GraphQLString),
        },
    },
});

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
        color: {
            type: GraphQLString,
        },
        available: {
            type: GraphQLBoolean,
        },
        season: {
            type: GraphQLString,
        },
        seasonYear: {
            type: GraphQLString,
        },
        activationDate: {
            type: GraphQLString,
        },
        genders: {
            type: new GraphQLList(GenderEnumType),
        },
        ageGroups: {
            type: new GraphQLList(AgeGroupEnumType),
        },
        brand: {
            type: BrandType,
        },
        categoryKeys: {
            type: new GraphQLList(GraphQLString),
        },
        attributes: {
            type: new GraphQLList(ArticleAttributeType),
        },
        additionalInfos: {
            type: new GraphQLList(GraphQLString),
        },
        units: {
            type: new GraphQLList(ArticleUnitType),
        },
        media: {
            type: ArticleMediaType,
        },
    },
});

module.exports = ArticleType;
