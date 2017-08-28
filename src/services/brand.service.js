const request = require('request-promise');

const BRAND_ENDPOINT = 'https://api.zalando.com/brands';

const getBrand = ({
    brandId,
}) => {
    const options = {
        uri: `${BRAND_ENDPOINT}/${brandId}`,
        json: true,
    };

    return request(options);
};

exports.getBrand = getBrand;
