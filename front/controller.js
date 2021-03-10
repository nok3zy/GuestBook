import axios from "axios"

export const getHome=(req,res)=>{
    res.render("main")
}


export const postHome=(req,res)=>{
    const {
        body:{ GuestName,Content}
    }=req;

    axios.post('http://localhost:5000/guestbook', {
        guest_name: GuestName,
        content: Content
      })
      .then(function (response) {
        console.log(response);
        console.log("fucking error")
      })
      .catch(function (error) {
        console.log(error);
      });
   
    res.redirect("/");
}
