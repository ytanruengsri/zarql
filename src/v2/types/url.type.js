const url = require('url');
const {
    GraphQLScalarType,
} = require('graphql/type');
const {
    Kind,
} = require('graphql/language');
const {
    GraphQLError,
} = require('graphql/error');

const coerceAsURLObj = (value) => {
    if (typeof value !== 'string') {
        throw new GraphQLError(`URL coercion error: can only parse strings to URLs;
        got value ${value} of type ${typeof value}`);
    }

    try {
        return url.parse(value).href;
    } catch (err) {
        throw new GraphQLError(`URL coercion error: value ${value} is an invalid
        URL string representation.`);
    }
};

const parseUrl = (ast) => {
    if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(`Query input coercion error: can only parse strings to URLs;
        got value ${ast.value} of kind ${ast.kind}, [ast])`);
    }

    coerceAsURLObj(ast.value);
};

const UrlType = new GraphQLScalarType({
    name: 'UrlType',
    serialize: coerceAsURLObj, // Serialize output value
    parseValue: (value) => { // Parse and coerce value from a query variable
        parseUrl({ kind: Kind.STRING, value });
    },
    parseLiteral: (ast) => { // Parse and coerce a literal value in a query
        parseUrl(ast);
    },
});

module.exports = UrlType;
