const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 })

clients = []

wss.on('connection', ws => {
  clients.push(ws)
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
    clients.forEach(client => {
      client.send(message)
    });

  })
})