const mongoose = require("mongoose");
const express = require("express");
require("../config/body-parse")

const Article = require('../Models/articleModel')

const app = express();






app.get('/Article', async (req, res)=>{
    await Article.find().populate('commande', '-_id')
    .exec()
    .then( (result) => {
        res.send(result);
    }
)});


/* app.post('/Article',async (req, res)=>{
//     try {
//        let new_comm = new Article({
    
//     });
    
//     await new_comm.save();
//     res.send("Saved successfully!!");
//     } 
//     catch (err){
//     console.log(err);
//     }
 })*/


app.delete('/Article/:id', async(req, res)=>{
    try {
        await Article.findOneAndDelete({_id:req.params.id})
        res.send("Delelted succesfully !!!!!")
    } catch (err) {
        res.send(err)
    }
})


app.put('/Article/:id', async(req, res)=>{
    try {
        await Article.findOneAndUpdate({id:req.params.id},{
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