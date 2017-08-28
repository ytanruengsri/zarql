class BrandSchema {
    get typeDefinition() {
        return `
            type Brand {
                code: String
                name: String
                shopUrl: String
            }
        `;
    }

    get queryDefinition() {
        return `
            brand(brandId: String!): Brand
        `;
    }
}

module.exports = BrandSchema;
