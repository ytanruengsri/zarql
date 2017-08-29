const { getDomains } = require('../services/domain.service');

module.exports = ({ countryCode }) => {
    return getDomains()
        .then(domains => {
            return countryCode
                ? domains.filter(domain => domain.countryCode === countryCode)
                : domains;
        });
};
