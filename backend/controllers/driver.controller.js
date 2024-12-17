const driverModel = require('../models/driver.model');
const driverService = require('../services/driver.service'); //userService is helping in connecting with the database;
const {validationResult} = require('express-validator');
const blackListTokenModel = require('../models/blacklistToken.model');


module.exports.registerDriver = async(req,res,next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({erros:errors.array()});
    }

    const {fullname,email,password,vehicle} = req.body;
    const isDriverAlready = await driverModel.findOne({email});
    if(isDriverAlready){
        return res.status(400).json({message:'driver already exists'});
    }
    
    const hashedPassword = await driverModel.hashPassword(password);

    const driver = await driverService.createDriver({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType
    });

    const token = driver.generateAuthToken();
    res.status(201).json({token,driver});
}

module.exports.loginDriver = async(req,res,next)=>{
    const errors = validationResult(req);
    //if any error during initial validation
    if(!errors.isEmpty()){
        return res.status(401).json({errors:errors.array()});
    }

    const {email,password} = req.body;
    //check if such email exists or not
    const driver = await driverModel.findOne({email}).select('+password');
    if(!driver){
        return res.status(401).json({message:'Invalid email or password'});
    }

    const isMatch = await driver.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message:'Invalid email or password'}) //this is for password;
    }

    const token = driver.generateAuthToken();

    res.cookie('token',token);
    res.status(200).json({token,driver});

}
module.exports.getDriverProfile = async(req,res,next)=>{
    res.status(200).json({driver:req.driver});

}

module.exports.logoutDriver = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    await blackListTokenModel.create({token});

    res.clearCookie('token');

    res.status(200).json({message:'Logout successfully'});
}