const mongoose = require("mongoose");
const express = require("express");
require("../config/body-parse")

const Commande = require('../Models/commandeModel')

const app = express();






app.get('/commande', async (req, res)=>{
    await Commande.find().populate("user", '-_id')
    .exec()
    .then( (result) => {
        res.send(result);
    }
)});


app.post('/commande',async (req, res)=>{
    try {
       let new_comm = new Commande({
    
        nomPlat: req.body.nomPlat,
        typeCuisine: req.body.typeCuisine,
        quant: req.body.quant,
        statComm: req.body.statComm,        
        user: req.body.user  
    });
    
    await new_comm.save();
    res.send("Saved successfully!!");
    } 
    catch (err){
    console.log(err);
    }
})


app.delete('/commande/:id', async(req, res)=>{
    try {
        await Commande.findOneAndDelete({_id:req.params.id})
        res.send("Delelted succesfully !!!!!")
    } catch (err) {
        res.send(err)
    }
})


app.put('/commande/:id', async(req, res)=>{
    try {
        await Commande.findOneAndUpdate({id:req.params.id},{
            nomPlat: req.body.nomPlat,
            typeCuisine: req.body.typeCuisine,
            quant: req.body.quant,
            statComm: req.body.statComm,        
            
        })
        res.send("Update succesfully !!!!!")
    } catch (err) {
        res.send(err)
    }
})







module.exports = app ;