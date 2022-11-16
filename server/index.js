import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'


const app = express()


app.use(bodyParser.json({ limit: "30mb", extendedd: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended :true}))
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://bertwinkeller:Cherrycreek15!@memories.lnuzilo.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000


async function connect() {
    try {
        await mongoose.connect(CONNECTION_URL)
        console.log('Connected to MongoDB')
    }catch(error){
        console.error(error)
    }
}
 
    connect()
    
    app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))
   // .catch((error) => console.log(error.message))


