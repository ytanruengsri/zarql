const request = require('request-promise');

const ARTICLE_ENDPOINT = 'https://api.zalando.com/articles';

const getArticle = ({
    articleId,
    acceptLanguage = 'de-DE',
}) => {
    const options = {
        uri: `${ARTICLE_ENDPOINT}/${articleId}`,
        headers: {
            'accept-language': acceptLanguage,
        },
        json: true,
    };

    return request(options);
};

exports.getArticle = getArticle;
