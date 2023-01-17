const  mongoose  = require("mongoose");
require('./userModel')
const roleSchema = mongoose.Schema({
    
    nom_role:{
        type: String,
        required: true,    
}

})

module.exports = Roles = mongoose.model("role", roleSchema);
