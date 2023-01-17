const  mongoose  = require("mongoose");
require('./roleModel');
const userSchema = mongoose.Schema({
    nom:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    roles:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "role",
    }
     // adresse:{
    //     type: String,
    //     required: true,
    // },
    // codePostale:{
    //     type: Number,
    //     required: true,
    // },
    // numContact:{
    //     type: Number,
    //     required: true,
    // },
    // pays:{
    //     type: String,
    //     required: true,
    // },
    
})

module.exports = User = mongoose.model("user", userSchema);