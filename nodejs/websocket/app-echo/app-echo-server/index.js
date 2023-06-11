const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();

// register a express server
const server = http.createServer(app);
// init the websocket server from http server
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log("msg received: ", message.toString());
    ws.send(message.toString());
  });
});

// play the websocket server
server.listen(process.env.PORT || 9999, () => {
  console.log("server listening on port:", server.address().port);
});
