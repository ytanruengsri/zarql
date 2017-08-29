const {
    GraphQLInterfaceType,
    GraphQLNonNull,
    GraphQLID,
} = require('graphql/type');

const EntityInterfaceType = new GraphQLInterfaceType({
    name: 'EntityInterfaceType',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
});

module.export = EntityInterfaceType;
