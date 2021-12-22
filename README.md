# Websocket server
WebSocket server with a endpoint to broadcast messages to all connected clients. Useful for manual and integrated tests.

## RUN

```
npm install
npm run startDev
```

## Connect to Websocket

The websocket is available on port 7071.

```
ws://localhost:7071
```

## Broadcast messages
The http API is availble on port 3030.

To broadcast a message/object to all connected clients execute the following request:
```
curl --location --request POST 'http://localhost:3030/messages/broadcast' \
--header 'Content-Type: application/json' \
--data-raw '{
 "text" : "this is an example, feel free to form this object in any shape you need"
}'
```

## Retrieve all broadcasted messages
The brodcasted messages are lost everytime the webserver is closed. However, you can see all the broadcasted messages since the webserver was started using the request below:

```
curl --location --request GET 'http://localhost:3030/messages/'
```