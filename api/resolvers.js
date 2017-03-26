const request = require('request-promise');

const ARTICLE_ENDPOINT = 'https://api.zalando.com/articles';

const getArticle =({
    config_sku,
}) => {
    const options = {
        uri: `${ARTICLE_ENDPOINT}/${config_sku}`,
        qs: {
            fields: 'id,modelId,name,shopUrl',
        },
        headers: {
            'accept-language': 'de-DE',
        },
        json: true,
    };

    return request(options)
        .then((response) => {
            if (!response.content) {
                return response;
            }

            return response.content.find(a => a.available);
        });
}


const resolvers = {
    Query: {
        article(_, args) {
            return getArticle({ config_sku: args.config_sku })
                .then(article => {
                    return {
                        config_sku: article.id,
                        model_sku: article.modelId,
                        name: article.name,
                        url: article.shopUrl,
                    };
                });
        },
    },
};

module.exports = resolvers;