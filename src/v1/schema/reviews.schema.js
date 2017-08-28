class ReviewsSchema {
    get typeDefinition() {
        return `
            type ReviewSummaries {
                articleModelId: String
                averageStarRating: Float
                numberOfUserReviews: Int
                numberOfUserRecommendations: Int
                numberOfUserPositiveRecommendations: Int
            }

            type Review {
                reviewId: String
                articleId: String
                articleModelId: String
                customerCountry: String
                title: String
                description: String
                created: String
                rating: Int
            }
        `;
    }

    get queryDefinition() {
        return `
            reviews(articleId: String!): [Review]
            reviewSummaries(modelId: String!): ReviewSummaries
        `;
    }
}

module.exports = ReviewsSchema;
