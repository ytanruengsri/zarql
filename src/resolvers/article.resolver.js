const { getArticle } = require('../services/article.service');

module.exports = ({ articleId }) => {
    return getArticle({ articleId });
};
