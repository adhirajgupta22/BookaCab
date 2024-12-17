const driverModel = require('../models/driver.model');

module.exports.createDriver = async({
    firstname,lastname,email,password,color,plate,capacity,vehicleType
}) =>{
    if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error('All fields are required to register');
    }
    const driver = driverModel.create({
        fullname:{
            firstname,
            lastname
        },
        email: email,
        password:password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
    })
    return driver;
}