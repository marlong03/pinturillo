const express = require('express');
const app = express();
/* const chalk = require('chalk'); */
const cors = require('cors');

app.use(cors());
const options = {
  cors: {
    origin: 'http://localhost:4200',
  },
};

const server = require('http').Server(app);
const io = require('socket.io')(server, options);



/* app.get('/', function (req, res) {
  res.send('Hello World!');
});
 */


io.on('connection', function (socket) {

  const handshake = socket.id;

  let { nameRoom } = socket.handshake.query;
  console.log("se conecto "+ handshake)   
    socket.to(nameRoom).emit('event', res);

  })


  socket.on('disconnect', function () {
    console.log('user disconnected');
  });


server.listen(3000, function () {
  console.log('\n')
  console.log(`>> Socket listo y escuchando por el puerto: 3000`)
})

