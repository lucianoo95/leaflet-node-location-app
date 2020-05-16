module.exports = io => {
  io.on('connection', (socket) => {

    console.log('new socket connected!');

    socket.on('userCoords', (coords) => {
      socket.broadcast.emit('newUserCoordinates', coords);
    });

  });
}