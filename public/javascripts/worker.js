var socket = new WebSocket('ws://localhost:3100');
socket.addEventListener('open', function(event) {
    socket.send('OK');
});
socket.addEventListener('message', function(event) {
    console.log('Web Socket message');
    postMessage(event.data);
    socket.send("Confirmation");
});
socket.addEventListener('error', function(event) {
    console.dir(event);
});
