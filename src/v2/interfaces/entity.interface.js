const {
    GraphQLInterfaceType,
    GraphQLNonNull,
    GraphQLID,
} = require('graphql/type');

const EntityType = new GraphQLInterfaceType({
    name: 'Entity',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
});

module.export = EntityType;
