var express = require('express');
var router = express.Router();

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 7071 });
const clients = new Map();

let messages = [];
let countUser = 0;

wss.on('connection', (ws) => {
    const id = ++countUser;

    console.log(`Connection ${id} stablished`)
    clients.set(id, ws);

    ws.on("close", (ws) => {    
        console.log(`Connection ${id} closed`)
        clients.delete(id);
    });    
});

router.get('/', (req, res) =>{
    res.json(messages);
})

router.post('/broadcast', (req, res) =>{
    if(req.body){
        messages.push(req.body);

        [...clients.values()].forEach((client) => {
            client.send(JSON.stringify(req.body));
        }); 
    }   

    res.json({ result : `message broadcasted to ${clients.size} clients` });
});

module.exports = router;