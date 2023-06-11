window.onload = function () {
  // API websocket to connect
  const ws_host = 'ws://localhost:9999';

  // ref for page elements
  var form = document.getElementById('message-form');
  var messageField = document.getElementById('message');
  var messagesList = document.getElementById('messages');
  var socketStatus = document.getElementById('status');
  var closeBtn = document.getElementById('close');

  // Create a WebSocket connection using the WebSocket class form MDN socket
  var socket = new WebSocket(ws_host);

  // listener for error messages
  socket.onerror = function (error) {
    console.log('WebSocket Error: ', error);
  };

  // listener for connection open
  socket.onopen = function (event) {
    socketStatus.innerHTML =
      'Conectado ao servidor: ' + event.currentTarget.url;
    socketStatus.className = 'open';
  };

  // listener to receive messages from server
  socket.onmessage = function (event) {
    var message = event.data;
    messagesList.innerHTML +=
      `<li class='received'><span>Received:</span>${message}</li>`;
  };

  // send message to the server
  form.onsubmit = function (e) {
    e.preventDefault();

    //from html form send to the server
    var message = messageField.value;
    console.log(message);
    socket.send(message);
    messageField.value = '';

    messagesList.innerHTML +=
      `<li class='sent'><span>Received:</span>${message}</li>`;
    return false;
  };

  // listener for close connection
  socket.onclose = function (event) {
    socketStatus.innerHTML = 'Websocket not available.';
    socketStatus.className = 'closed';
  };

  // action to close socket
  closeBtn.onclick = function (e) {
    e.preventDefault();
    socket.close();
    return false;
  };
};
