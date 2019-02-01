module.exports = {
    consumer_key: process.env.consumer_key || 'consumer-key',
    consumer_secret: process.env.consumer_secret || 'consumer-secret',
    access_token_key: process.env.access_token_key || 'token-key',
    access_token_secret: process.env.access_token_secret || 'token-secret',
    host: process.env.host || 'localhost',
    port: process.env.port || 8080
};