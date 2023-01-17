const mongoose = require("mongoose");
require("./userModel")
const restaurantSchema =mongoose.Schema({
    
    
    nom_Rest:{
        type: String,
        required: true,
    },
    
    proprietaire:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'user',
    }, 
})


module.exports = Restaurant = mongoose.model("restaurant", restaurantSchema);