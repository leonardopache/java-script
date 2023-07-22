module.exports = {
    baseUrl : process.env.BASE_URL,
    scope : process.env.SCOPE,
    client_id : process.env.OAUTH_CLIENT_ID,
    client_secret : process.env.OAUTH_CLIENT_SECRET || '',
    port : process.env.PORT
}