const express = require('express');
const app = express();

app.use(express.json());

const messagesRouter = require('./messages');

app.use('/messages', messagesRouter)

app.get("*", (req, res) => {
    res.send('Connect in the websocket on port 7071, and brodcast messages via POST /messages/broadcast');
})

app.listen(3030, () => console.log('server is up'));