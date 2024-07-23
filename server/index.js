const express = require("express") 
const app = express() 
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
const cors = require('cors') 

app.use(express.json());
app.use(cors()); 

mongoose.connect("mongodb+srv://jban:go3244@cluster0.4ec6t6e.mongodb.net/AStarEcomDB?retryWrites=true&w=majority&appName=Cluster0"); 

/*app.get("/getUsers", (req, res) =>{
//     UserModel.find({}, (err, result) => {
//         if (err){
//             res.json(err);
//         }else{
//             res.json(result);
//         }
//     });
// });*/

app.get("/getUsers", async (req, res) => {
    try {
        const result = await UserModel.find({});
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});


app.post("/createUser", async(req, res) =>{

    const user = req.body
    const newUser = new UserModel(user);
    await newUser.save(); 

    res.json(user)
});


app.listen(3001, () => {
    console.log("SERVER IS RUNNING PERFECTLY");
}); 