// event module
var eventEmitter = new eventEmitter();
var ee=new eventEmitter();
eventEmitter.emit('my_event');
eventEmitter.on('my_event', () => {
  console.log('data received successfully.');
});