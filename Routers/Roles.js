const express = require("express");
const mongoose = require("mongoose");
require("../config/body-parse")
const Role = require("../Models/roleModel");

const app = express();


app.get('/role', async (req, res)=>{
     
    await Role.find().populate("user")
    .exec()
    .then ( resultat => {
        res.send(resultat);
    }
)});  

app.post('/role', async(req, res)=>{
    try {
     let new_role = new Role({
         nom_role: req.body.nom_role,
     });
   
         await new_role.save();
         res.send("Saved successfully !!!");  
     
     }
     catch (err) {
         console.log(err);
    }
 })

 module.exports = app ;