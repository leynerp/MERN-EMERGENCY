import mongoose from 'mongoose'
export default async function connectDB () {
  try {
    await mongoose.connect('mongodb://192.168.146.128:27017/db_demand')
    console.log('db connected')
  } catch (error) {
    console.log(error)
  }
}
