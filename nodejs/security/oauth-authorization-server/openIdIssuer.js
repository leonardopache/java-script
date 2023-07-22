const openIdClient = require('openid-client')
 
module.exports = async function () {
    const issuerData = await openIdClient.Issuer.discover(process.env.AUTHORIZATION_WELLKNOWN)
    console.log('Discovered issuer: %s \n\nmetadata: %O', issuerData.issuer, issuerData.metadata);
    return issuerData;
}