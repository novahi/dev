const mongoose = require('mongoose')
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
class Database {
  async connect(uri,port) {
    try {
      await mongoose.connect(uri, options)
      console.log(`Connection with Database Successfully!`)
      console.log(`Server start on Port: ${port}`)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }
  async connects(uri) {
    try {
      await mongoose.createConnection(uri, options)
      console.log(`Connection with Database Successfully!`)
    } catch (e) {
      console.log(`Error: ${error}`)
    }
  }
}

module.exports = new Database()
