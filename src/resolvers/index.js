const articleResolver = require('./article.resolver');
const brandResolver = require('./brand.resolver');
const {
    reviewsResolver,
    reviewSummariesResolver,
} = require('./reviews.resolver');

module.exports = {
    article: (...params) => articleResolver(...params),
    brand: (...params) => brandResolver(...params),
    reviews: (...params) => reviewsResolver(...params),
    reviewSummaries: (...params) => reviewSummariesResolver(...params),
};
