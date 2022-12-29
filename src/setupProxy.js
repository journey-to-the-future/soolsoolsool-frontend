const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://43.201.93.151:8080',
            changeOrigin: true,
        })
    );
};