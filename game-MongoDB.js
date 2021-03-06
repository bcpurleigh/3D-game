const url = 'mongodb://localhost:27017/game'
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
//
//const Server = require('mongodb').Server
//new Server("localhost", 27017)

// connect to database
const connectDB = testing => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, (err, db) => {

            if(err){
                console.log("resolving")
                reject(err.message)
            }

            if(testing){
                console.log("connected to db")
                db.close()            
                resolve({message: "Conencted to db"})
            }else 
                resolve(db)
        })
    })
}

/** Room Stuff **/
module.exports.getRooms = async() => {

  const db = await connectDB()

  room = db.collection("room")
  let result = await room.find({}).toArray()
  return result  
};

module.exports.getRoom = async(id) => {
  const db = await connectDB()
  
  const room = db.collection("room")
  let result = await room.find({room: id}).toArray()
  
  return result  
};

module.exports.createRoom = async(id) => {
  const db = await connectDB()
  
  const room = db.collection("room")
  let result = await room.insert({room: id, data: ""})
  
  return result  
};

module.exports.updateRoom = async(id, data) => {
  const db = await connectDB()
  
  const room = db.collection("room")
  let result = await room.insert({room: id, data: data})
  
  return result  
};
/** end room Stuff **/

/** user Stuff **/

module.exports.getUsers = async() => {

  const db = await connectDB()

  let user = db.collection("user")
  let result = await user.find({}).toArray()
  return result  
};

module.exports.getUser = async(id) => {

  const db = await connectDB()

  let user = db.collection("user")
  let result = await user.find({}).toArray()
  return result  
};

module.exports.createUser = async(data) => {
  const db = await connectDB()
  
  const user = db.collection("user")
  let result = await user.insert([data])
  
  return result  
};


/** end user Stuff **/


