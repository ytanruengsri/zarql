class ArticleSchema {
    get typeDefinition() {
        return `
            type Article {
                id: String
                modelId: String
                name: String
                shopUrl: String
            }
        `;
    }

    get queryDefinition() {
        return `
            article(articleId: String!): Article
        `;
    }
}

module.exports = ArticleSchema;
