module.exports = (_, { types }) => {
    return Array.isArray(types) && types.length === 0
        ? _.media
        : {
            images: _.media.images.filter((item) => types.includes(item.type)),
        };
};
