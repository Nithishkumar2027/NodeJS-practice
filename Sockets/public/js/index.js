const socket = io()
socket.on('updatedCount', (count) => {
    console.log('Count has been updated', count)
    document.getElementById('value').innerHTML = count
})
document.querySelector('#increment').addEventListener('click', () => {
    console.log('Button clicked')
    socket.emit('increment')
})
document.querySelector('#reset').addEventListener('click', () => {
    console.log('Reset')
    socket.emit('reset')
})