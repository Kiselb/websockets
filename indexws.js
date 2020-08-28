const websocket = require('ws');
const http = require('http');
const server = http.createServer(require('express')());
const port = 3100;

wss = new websocket.Server({ server });

wss.on('connection', ws => {
    console.log('Client connected');
    
    ws.on('message', ws => {
        console.log('Message confirmed');
    });
    
    setInterval(() => ws.send('Message from server at: ' + (new Date).toLocaleTimeString()), 10000)
});

server.listen(port, () => {
    console.log(`Server started on PORT ${port}`);
});
