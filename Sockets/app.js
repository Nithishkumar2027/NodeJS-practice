const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})
let count = 0

io.on('connection', (socket) => {
    console.log('User connected')

    socket.emit('updatedCount', count)

    socket.on('increment', () => {
        count++
        io.emit('updatedCount', count)
    })

    socket.on('reset', () => {
        count = 0
        io.emit('updatedCount', count)
    })

    socket.on('disconnect', () => {
        console.log('User disconnected')
    })
})

const port = process.env.PORT || 3000
server.listen(port, () => console.log(`Listening on http://localhost:${port}`))