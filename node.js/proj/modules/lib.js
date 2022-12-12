const EventEmitter = require('events').EventEmitter

class Geekitme extends EventEmitter {
  constructor() {
    super()
    setInterval(() => {
      this.emit('newLesson', {
        price: Math.random() * 100,
      })
    }, 3000)
  }
}

const geekitme = new Geekitme();

module.exports = geekitme;