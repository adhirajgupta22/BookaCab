const userModel = require('../models/user.model'); 
const userService = require('../services/user.service'); //userService is helping in connecting with the database;
const {validationResult} = require('express-validator');
const blackListTokenModel = require('../models/blacklistToken.model');


module.exports.registerUser = async(req,res,next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({erros:errors.array()});
    }

    const {fullname,email,password} = req.body;
    const isUserAlready = await userModel.findOne({email});
    if(isUserAlready){
        return res.status(400).json({message:'User already exists'});
    }
    
    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword,
    });

    const token = user.generateAuthToken();
    res.status(201).json({token,user});
}

module.exports.loginUser = async(req,res,next)=>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email,password} = req.body;

    //check if any user with the provided email exists or not

    const user = await userModel.findOne({email}).select('+password');  //we by default did select as false in password

    if(!user){
        return res.status(401).json({message:'Invalid email or password'});
    }
    //notes the above is for mail but the output invalid email or password ye hum dono me hi same dalenge and u know the reason

    //if email exists and pass is wrong?
    const isMatch = await user.comparePassword(password);

    if(!isMatch){
        res.status(401).json({message:'Invalid email or password'});
    }

    const token = user.generateAuthToken();
    res.cookie('token',token);
    res.status(200).json({token,user});
}

module.exports.getUserProfile = async(req,res,next)=>{
    //for this part we will be needing a middleware 
    res.status(200).json(req.user);
}

module.exports.logoutUser = async(req,res,next)=>{
    res.clearCookie('token');   
    const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];

    await blackListTokenModel.create({token});

    res.status(200).json({message: 'Logged out'});
}