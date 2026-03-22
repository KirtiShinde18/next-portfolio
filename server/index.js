require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose  = require("mongoose")
const { FRONTEND_URL } = require("./utils/config")
const cookieParser = require("cookie-parser")


const app = express()
mongoose.connect(process.env.MONGO_URL)

app.use(cors({
    origin : FRONTEND_URL, 
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", require("./routes/admin.route"))

app.use("/" , (req , res) => { 
    res.status(200).json({message: `Portfolio Api Running in ${process.env.NODE_ENV} mode`})
})

mongoose.connection.once("open", () => {
    console.log("db connected");
    app.listen(process.env.PORT , () => {
        console.log("Server running");
        console.log(`mode : ${process.env.NODE_ENV}`);
              
    })
    
})

module.exports = app