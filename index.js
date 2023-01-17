const express = require("express");
const mongoose = require("mongoose");
const Role = require("./Routers/Roles");
const User = require("./Routers/Users");
const Magasin = require("./Routers/Magasins");
const Restaurant = require("./Routers/Restaurants");
const Categorie = require("./Routers/categories");
const Commande = require("./Routers/Commandes");
const Article = require("./Routers/Articles");





const app =  express();



app.listen(3000, ()=>
    console.log("En marche")
)
mongoose.connect
('mongodb+srv://Iyed:iyed@cluster0.nbyy5n4.mongodb.net/?retryWrites=true&w=majority', (err, done)=>{

        if(err)  {
            console.log(err)
        }
        if(done) {
            console.log("Data Base connected succesfully!!")
        }
    }
)


app.use("/get", Role); //Afficher liste du restaurants....
app.use("/add",Role); //Ajouter un restaurant au list.....


app.use("/get", User); //Afficher liste des utilisateurs....
app.use("/get/:id", User); //Afficher un utilisateur par id....
app.use("/add", User); //Ajouter un utilisateur au list.....
app.use("/update",User); //Modifier un restaurant par son id..
app.use("/delete",User);  //Supprimer un restaurant par son id....




app.use("/get", Magasin); //Afficher liste des magasins....
app.use("/add", Magasin); //Ajouter un magasin au list.....
app.use("/update",Magasin); //Modifier un magasin par son id..
app.use("/delete",Magasin);  //Supprimer un magasin par son id....


app.use("/get", Restaurant); //Afficher liste du restaurants....
app.use("/add",Restaurant); //Ajouter un restaurant au list.....
app.use("/update",Restaurant); //Modifier un restaurant par son id..
app.use("/delete",Restaurant);  //Supprimer un restaurant par son id....



app.use("/get", Categorie); //Afficher liste du Categories....


app.use("/get", Commande); //Afficher liste du Categories....


app.use("/get", Article); //Afficher liste du Categories....
