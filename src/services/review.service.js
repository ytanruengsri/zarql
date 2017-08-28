const request = require('request-promise');

const REVIEW_ENDPOINT = 'https://api.zalando.com/article-reviews';
const REVIEW_SUMMARIES_ENDPOINT = 'https://api.zalando.com/article-reviews-summaries';

const getReviewSummaries = ({
    modelId,
    acceptLanguage = 'de-DE',
}) => {
    const options = {
        uri: `${REVIEW_SUMMARIES_ENDPOINT}/${modelId}`,
        headers: {
            'accept-language': acceptLanguage,
        },
        json: true,
    };

    return request(options);
};

const getReviews = ({
    articleId,
    acceptLanguage = 'de-DE',
}) => {
    const options = {
        uri: `${REVIEW_ENDPOINT}?articleId=${articleId}`,
        headers: {
            'accept-language': acceptLanguage,
        },
        json: true,
    };

    return request(options);
};

exports.getReviewSummaries = getReviewSummaries;
exports.getReviews = getReviews;
