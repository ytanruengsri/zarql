const { getDomains } = require('../services/domain.service');

module.exports = ({ countryCode }) => {
    console.log('>>>>> countryCode: ', countryCode);
    return getDomains()
        .then(domains => {
            return countryCode
                ? domains.filter(domain => domain.countryCode === countryCode)
                : domains;
        });
};
