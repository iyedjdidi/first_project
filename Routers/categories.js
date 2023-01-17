const express = require("express");
const mongoose  = require("mongoose");
require("../config/body-parse");

const Categorie = require("../Models/categorieModel");
const { find1 } = require("../Models/categorieModel");

const app = express() ;


app.get ('/categorie', async (req, res)=> {
   await Categorie.find()
    .then ( resultat => {
            res.send(resultat);    
    }
)});


module.exports = app ;