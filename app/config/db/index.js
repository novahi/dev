const mongoose = require('mongoose')
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
class Database {
  async connect(uri,port) {
    try {
      await mongoose.connect(uri, options)
      console.log(`Connection User Database`)
      console.log(`http://localhost:${port}`)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }
  connects(uri) {
    console.log(`Connect Account Database`)
    return mongoose.createConnection(uri, options)
  }
}

module.exports = new Database()
