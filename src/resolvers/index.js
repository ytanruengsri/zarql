const resolveArticle = require('./article.resolver');
const resolveBrand = require('./brand.resolver');
const {
    resolveReviews,
    resolveReviewSummaries,
} = require('./reviews.resolver');

module.exports = {
    article: (...params) => resolveArticle(...params),
    brand: (...params) => resolveBrand(...params),
    reviews: (...params) => resolveReviews(...params),
    reviewSummaries: (...params) => resolveReviewSummaries(...params),
};
