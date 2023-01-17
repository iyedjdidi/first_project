require('./userModel')
const mongoose  = require("mongoose");

const commandeSchema = mongoose.Schema(
    {
        nomPlat: {
            type: String, 
            required: true,
        },
        typeCuisine:{
            type: String,
            required: true,
        },
        quant:{
            type: Number,
            required: true,
        },
        statComm:{
            type: String,
            required: true,
            enum :[
                "Confirmé", "En cours", "Récupérée"
            ]
        },
        user:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }]


    }
)

module.exports = Commande = mongoose.model('commande', commandeSchema);