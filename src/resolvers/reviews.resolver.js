const { getReviews, getReviewSummaries } = require('../../services/review.service');

exports.reviewsResolver = ({ articleId }) => {
    return getReviews({ articleId })
        .then(reviews => reviews.content)
        .catch(() => []);
};

exports.reviewSummariesResolver = ({ modelId }) => {
    return getReviewSummaries({ modelId });
};
