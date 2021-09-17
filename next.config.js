const redirects = require('./config/redirect');

module.exports = {
    trailingSlash: true,
    async redirects() {
        return redirects;
    },
};