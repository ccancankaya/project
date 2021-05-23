const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db=require('./models')
const axios=require('axios')
const Ip_Info = db.ip_info

const app = express();
app.use(cors());
app.use(bodyParser.json());




db.sequelize.sync({force:true}).then(()=>{
  console.log('Drop and Resync Database with { force: true }');
})

app.get("/",(req,res)=>{
  res.send('api works')
   
})

app.get("/values/all",(req,res)=>{
  function getIp() {
    return axios.get('https://ifconfig.me/ip')
      .then(response => {
        return JSON.stringify(response.data)


      })
      .catch(error => {
        console.log(error);
        return Promise.reject(error);
      });
  }

  getIp().then(response => {
    res.send(response)
    Ip_Info.create({
      ip_address: response
    })
  });

  const values=Ip_Info.findAll();

  console.log(values)

  // res.send(values)
})
app.listen(5000, err => {
    console.log("Listening");
  });