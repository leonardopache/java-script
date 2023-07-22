const express = require('express');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const config = require('./config.js');

// any non undefined value in param will force manual client configuration
const issuer = require('./openIdIssuer')();
issuer.defaultHttpOptions = { timeout: 3500 };

const app = express();
global.Headers = fetch.Headers;

let client;

issuer.then((issuer) => {
  client = new issuer.Client({
    client_id: config.client_id,
    client_secret: config.client_secret,
  });

  app.listen(config.port, () =>
    console.log(`Sample app listening on port ${config.port}!`)
  );
});

app.get('/auth', async (req, res) => {
    let id = req.params.id;
    const grant = {
        grant_type: 'client_credentials',
        scope: config.scope,
      };
    
    try {
        const token = await client.grant(grant);
        console.log(token);
        res.json(token);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });
