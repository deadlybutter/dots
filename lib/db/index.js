const mongoose = require('mongoose');
const console = require('keypunch');

if (process.env.DEBUG_MONGO) mongoose.set('debug', true);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('open', () => {
  console.info('Mongoose connection open');
});

mongoose.connection.on('error', (err) => {
  console.info('Mongoose connection error', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection disconnected');
});

module.exports = {
  Connection: require('./Connection'),
  Node: require('./Node'),
}
