const express = require("express");
const mongoose = require("mongoose");
require("../config/body-parse")

const { find1 } = require("../Models/userModel");

const Roles = require("../Models/roleModel")
const User = require("../Models/userModel")
const Restaurant = require("../Models/RestauModel");

const app = express();
app.get('/user/:id', async (req, res)=>{
     
    await User.findById({_id:req.params.id}).populate('role', '-_id')
   .exec()
   .then ( resultat => {
       res.send(resultat);
   }
)});  

app.get('/user', async (req, res)=>{
     
     await User.find().populate('roles', '-_id')
    .exec()
    .then ( resultat => {
        res.send(resultat);
    }
)});  

app.post('/user', async(req, res)=>{
   try {
    let user = new User({
        nom: req.body.nom ,
        email: req.body.email,
        roles: req.body.roles     
    });
  
        await user.save();
        res.send("Saved successfully !!!");  
    
    }
    catch (err) {
        console.log(err);
   }
})

app.put('/user/:id', async(req, res)=>{
    try {
        await User.findOneAndUpdate({id:req.params.id},{
            nom: req.body.nom,
        })
        res.send("Update succesfully !!!!!")
    } catch (err) {
        res.send(err)
    } 
})

app.delete('/user/:id', async(req, res)=>{
    try {
        await User.findOneAndDelete({_id:req.params.id})
        res.send("Delelted succesfully !!!!!")
    } catch (err) {
        res.send(err)
    }
})

module.exports = app;
