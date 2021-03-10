import axios from "axios"
import { response } from "express";

body = document.querySelector("body");

let visits = []
let backendConnected = false

console.log("A");

const getVisit=()=>{
    console.log("getVisit");
    axios.get("http://localhost:5000/visits")
        .then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
}

// const getVisits = () => {
//     axios.get('http://localhost:5000/guestbook')
//         .then((response) => {
//             visits = response.data.visits
//             backendConnected = true
//         }).catch((error) => {
//             backendConnected = false
//             console.log(error)
//         })
// }

// const addVisit = () => {
//     axios.post('http://localhost:5000/guestbook', {
//         name: GuestName,
//         detail : Content,
//         time : Date.now
//     }).then((response) => {
//         getVisits()
//         }).catch((error) => {
//             console.log(error)
//         })
// }

if (body){
    getVisits()
}

