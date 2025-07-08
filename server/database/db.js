import mongoose from "mongoose"


const connection = async () =>{
    try {
        await mongoose.connect("mongodb://localhost:27017/whatsapp_clone",{ useUnifiedTopology:true })
        console.log('connection to database successful')
    } catch (error) {
        console.log("Error while connecting to DataBase",error.message)
    }
   
}

export default connection