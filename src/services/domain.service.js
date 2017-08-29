const request = require('request-promise');

const DOMAINS_ENDPOINT = 'https://api.zalando.com/domains';

const getDomains = () => {
    const options = {
        uri: `${DOMAINS_ENDPOINT}`,
        json: true,
    };

    return request(options);
};

exports.getDomains = getDomains;
