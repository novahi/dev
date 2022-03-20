const mongoose = require('mongoose')
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
class Database {
  async connect(uri,port) {
    try {
      const c = await mongoose.connect(uri, options)
      console.log(`Connection with Database Successfully!`)
      console.log(`http://localhost:${port}`)
      return c
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }
  connects(uri) {
    return mongoose.createConnection(uri, options)
  }
}

module.exports = new Database()
