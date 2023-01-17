const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    commande :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "commande"
    }]
})

module.exports = Article = mongoose.model("article", articleSchema);