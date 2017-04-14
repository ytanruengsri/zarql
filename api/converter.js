const toBrand = (brand) => {
    return {
        code: brand.key,
        name: brand.name,
        shopUrl: brand.shopUrl,
    };
};

const toArticle = (article) => {
    return {
        configSku: article.id,
        modelSku: article.modelId,
        name: article.name,
        url: article.shopUrl,
        brand: toBrand(article.brand),
    };
};

const toReviewSummaries = (reviewSummaries) => {
    return {
        averageStarRating: reviewSummaries.averageStarRating,
        numberOfUserReviews: reviewSummaries.numberOfUserReviews,
        numberOfUserRecommendations: reviewSummaries.numberOfUserRecommendations,
        numberOfUserPositiveRecommendations: reviewSummaries.numberOfUserPositiveRecommendations,
        starRatingDistribution: reviewSummaries.starRatingDistribution,
    };
};

exports.toArticle = toArticle;
exports.toReviewSummaries = toReviewSummaries;
