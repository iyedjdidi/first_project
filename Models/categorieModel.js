const  mongoose  = require("mongoose");
const categorieSchema =  mongoose.Schema({

    nomCatego :{
        type: String,
        required: true,
    }

})

module.exports = Categorie = mongoose.model("categories", categorieSchema)