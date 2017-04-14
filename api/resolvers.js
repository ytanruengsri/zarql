const {
    getArticle,
    getReviewSummaries,
    getRecommendation,
} = require('./services');

const {
    toArticle,
    toReviewSummaries,
} = require('./converter');

const aggregateArticle = (args) => {
    return Promise.all([
        getArticle({ configSku: args.configSku }),
        getReviewSummaries({ modelSku: args.modelSku }),
    ]).then(([article, reviewSummaries]) => {
        if (!article.id) {
            return article;
        }

        return Object.assign({}, toArticle(article), {
            summaries: toReviewSummaries(reviewSummaries),
        });
    });
};

const aggregateRecommendation = (args) => {
    return getRecommendation({ configSku: args.configSku })
        .then((recommendation) => {
            return recommendation.map((article) => {
                return toArticle(article);
            });
        });
};

const resolvers = {
    Query: {
        article(_, args) {
            return aggregateArticle(args);
        },
        recommendation(_, args) {
            return aggregateRecommendation(args);
        },
    },
};

module.exports = resolvers;
