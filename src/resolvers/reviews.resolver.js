const { getReviews, getReviewSummaries } = require('../services/review.service');

exports.resolveReviews = ({ articleId }) => {
    return getReviews({ articleId })
        .then(reviews => reviews.content)
        .catch(() => []);
};

exports.resolveReviewSummaries = ({ modelId }) => {
    return getReviewSummaries({ modelId });
};
