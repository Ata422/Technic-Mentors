const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://Mentors:mentorsCluster@clustermentors.1pshdif.mongodb.net/?retryWrites=true&w=majority'

 const connectToMongo = async ()=>{
    try {
        mongoose.connect(mongoURI)
        console.log('Successfuly connected with mongodb')
    } catch (error) {
        console.log(error)
        process.exit()
    }
 }

 module.exports = connectToMongo