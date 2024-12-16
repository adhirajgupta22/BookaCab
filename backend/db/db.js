//database connection file  

const mongoose = require('mongoose');

function connectToDb(){ //function to connect to the database
    mongoose.connect(process.env.DB_CONNECT)
    .then(()=>{
        console.log('connected to database');
    })
    .catch(err=>console.log(err));

}

module.exports = connectToDb;