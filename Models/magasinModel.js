const mongoose = require("mongoose");
const magasinSchema =mongoose.Schema({
    
    nom_mag:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    adresse:{
        type: String, //Ville, etat, pays
        required: true,
    },
    ville:{
        type: String,
        required: true,
    },
    numContact:{
        type: Number,
        required: true,
    },
    proprietaire:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'user',
    }

}) 
module.exports = Magasin = mongoose.model("magasin", magasinSchema);