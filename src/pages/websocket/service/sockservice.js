import io from 'socket.io-client';

const socket = io.connect('http://localhost:9000/my-namespace');

function subscribeToTimer(cb) {
  // socket.on('timer', timestamp => cb(null, timestamp));
  // socket.emit('subscribeToTimer', 1000);
}

export { subscribeToTimer };
