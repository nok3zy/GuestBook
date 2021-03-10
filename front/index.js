import express from "express";
import router from "./router";
import axios from "axios"
import bodyParser from "body-parser"
const app = express();

const listen=()=>{
    console.log("localhost:4000")
}

app.use("/static", express.static("static"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine","pug");


const middleware =(req,res,next)=>{
    axios.get("http://localhost:5000/guestbook")
    .then((response)=>{
        console.log(response.data.visits)
        res.locals.guests = response.data.visits;
        next();
    }).catch((error)=>{
        console.log(error)
        console.log("errorkkk")
    })
}

app.use(middleware)
app.use("/",router)


app.listen(4000,listen);