const Event = require('node:events');

const event = new Event();

event.on('test',(data)=> {console.log(data)});

module.exports = {
    event
}