const express = require("express");
const mongoose = require("mongoose");
require("../config/body-parse")
const { find } = require("../Models/magasinModel");

const Magasin = require("../Models/magasinModel");
const User = require("../Models/userModel");


const app =  express();



app.get('/magasin', async (req, res)=>{
    await Magasin.find().populate("proprietaire", '-_id')
    .exec()
    .then( (result) => {
        res.send(result);
    }
)});


app.post('/magasin',async (req, res)=>{
    try {
       let new_mag = new Magasin({
    
        nom_mag: req.body.nom_mag,
        email: req.body.email,
        adresse: req.body.adresse,
        ville: req.body.ville,
        numContact:req.body.numContact,
        proprietaire: req.body.proprietaire  
    });
    
    await new_mag.save();
    res.send("Saved successfully!!");
    } 
    catch (err){
    console.log(err);
    }
})


app.delete('/magasin/:id', async(req, res)=>{
    try {
        await Magasin.findOneAndDelete({_id:req.params.id})
        res.send("Delelted succesfully !!!!!")
    } catch (err) {
        res.send(err)
    }
})


app.put('/magasin/:id', async(req, res)=>{
    try {
        await Magasin.findOneAndUpdate({id:req.params.id},{
            nom_maga: req.body.nom_maga,
            proprietaire
        })
        res.send("Update succesfully !!!!!")
    } catch (err) {
        res.send(err)
    }
})

module.exports = app;
