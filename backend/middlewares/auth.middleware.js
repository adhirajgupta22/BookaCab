const userModel = require('../models/user.model');
const driverModel = require('../models/driver.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.authUser = async (req,res,next)=>{
    //token could be in cookies and headers 
    const token = req.cookies.token  || req.headers.authorization?.split(' ')[ 1 ];
    if(!token){
        return res.status(401).json({messgae: 'Unauthorized'});
    }

    const isblacklisted = await blacklistTokenModel.findOne({token:token});
    if(isblacklisted){
        return res.status(401).json({message:'unauthorized'});
    }

    //decode the token

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        //Since while creating the token we only gave id so here we will also receive the id
        const user = await userModel.findById(decoded._id);

        req.user = user;

        return next();
        
    } catch (err) {
        return res.status(401).json({message:'Unauthorized'});
    }

}

module.exports.authDriver = async (req,res,next) =>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    if(!token){
        return res.status(401).json({message: 'Unauthorized'});
    }

    const isblacklisted = await blacklistTokenModel.findOne({token:token});

    if(isblacklisted){
        return res.status(401).json({message:"Unauthorized"});
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const driver = await driverModel.findById(decoded._id);
        req.driver = driver;

        return next();
        
    } catch (err) {

        // console.log(err);

        res.status(401).json({message:'Unauthorized'});
    }

}