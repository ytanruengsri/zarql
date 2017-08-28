const { getBrand } = require('../../services/brand.service');

module.exports = ({ brandId }) => {
    return getBrand({ brandId });
};
