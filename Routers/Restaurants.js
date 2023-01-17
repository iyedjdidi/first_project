const express = require("express");
const mongoose = require("mongoose");
require("../config/body-parse")
const { find } = require("../Models/RestauModel");

const User = require("../Models/userModel");
const Restaurant = require("../Models/RestauModel");

const app =  express();


app.get('/restaurant', async (req, res)=>{
    await Restaurant.find().populate("proprietaire", "-_id")
    .exec()
    .then( (result) => {
        res.send(result);
    }
)});


app.post('/restaurant',async (req, res)=>{
    try {
       let new_Restau = new Restaurant({
    
        nom_Rest: req.body.nom_Rest,
        proprietaire: req.body.proprietaire  
    });
    
    await new_Restau.save();
    res.send("Saved successfully!!");
    } 
    catch (err){
    console.log(err);
    }
})


app.delete('/restaurant/:id', async(req, res)=>{
    try {
        await Restaurant.findOneAndDelete({_id:req.params.id})
        res.send("Delelted succesfully !!!!!")
    } catch (err) {
        res.send(err)
    }
})


app.put('/restaurant/:id', async(req, res)=>{
    try {
        await Restaurant.findOneAndUpdate({id:req.params.id},{
            nom_Rest: req.body.nom_Rest,
            proprietaire
        })
        res.send("Update succesfully !!!!!")
    } catch (err) {
        res.send(err)
    }
})

module.exports = app;