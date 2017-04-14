const request = require('request-promise');

const ARTICLE_ENDPOINT = 'https://api.zalando.com/articles';
const REVIEW_SUMMARIES_ENDPOINT = 'https://api.zalando.com/article-reviews-summaries';
const RECOMMENDATION_ENDPOINT = 'https://api.zalando.com/recommendations';

const getArticle = ({
    configSku,
}) => {
    const options = {
        uri: `${ARTICLE_ENDPOINT}/${configSku}`,
        qs: {
            fields: 'id,modelId,name,shopUrl,brand',
        },
        headers: {
            'accept-language': 'de-DE',
        },
        json: true,
    };

    return request(options);
};

const getReviewSummaries = ({
    modelSku,
}) => {
    const options = {
        uri: `${REVIEW_SUMMARIES_ENDPOINT}/${modelSku}`,
        headers: {
            'accept-language': 'de-DE',
        },
        json: true,
    };

    return request(options);
};

const getRecommendation = ({
   configSku,
}) => {
    const options = {
        uri: `${RECOMMENDATION_ENDPOINT}/${configSku}`,
        headers: {
            'accept-language': 'de-DE',
        },
        json: true,
    };

    return request(options);
};

exports.getArticle = getArticle;
exports.getReviewSummaries = getReviewSummaries;
exports.getRecommendation = getRecommendation;
