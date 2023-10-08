### Welcome

This example of getting token form Authorization Server using Oauth2 client_credentials. 

**Dependencies**
- dotenv
- express
- node-fetch
- openid-client
- request

**To run this sample**

1. Clone the current project.
2. Copy `.env-template` to `.env`, and enter `<%YOUR-CLIENT-ID%>`, and `<%YOUR-SECRET-KEY%>` of the application.

> The `AUTHORIZATION_WELLKNOWN` is the URL of the Discovery service. Look about it [here](https://swagger.io/docs/specification/authentication/openid-connect-discovery/).   

3. Install the dependencies and start the server:
```sh
$ npm install
$ npm start
```

4. Obtain the token with
```sh
curl localhost:3000/auth
```
