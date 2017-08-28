const request = require('request-promise');

const RECOMMENDATION_ENDPOINT = 'https://api.zalando.com/recommendations';

const getRecommendation = ({
   configSku,
   acceptLanguage = 'de-DE',
}) => {
    const options = {
        uri: `${RECOMMENDATION_ENDPOINT}/${configSku}`,
        headers: {
            'accept-language': acceptLanguage,
        },
        json: true,
    };

    return request(options);
};

exports.getRecommendation = getRecommendation;
