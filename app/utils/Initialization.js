const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const initialSetup = (app) => {
    mongoose.connect('mongodb+srv://Manish123dev:<password>@cluster0.mkne7ct.mongodb.net/?retryWrites=true&w=majority',{ useUnifiedTopology: true }).then(()=>{
    console.log("connect to database");
    }).catch((err)=>{
        console.log(err);
    })
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json());
}
module.exports = initialSetup;