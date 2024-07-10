const userModel = require("../models/userModel")
const bcrypt = require ('bcryptjs');

async function userSignUpcontroller(req,res){
    try{

        const {email, password, name} = req.body
        
        const user = await userModel.findOne({email})

        console.log("user",user)

        if (user){
            throw new Error ("Usuario ya Existe.")
        }

        if (!email){
            throw new Error ("Por favor ingrese email")
        }
        if (!password){
            throw new Error ("Por favor ingrese Contraseña")
        }
        if (!name){
            throw new Error ("Por favor ingrese Nombre")
        }

        const salt= bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt)

        if (!hashPassword){
            throw new Error ("Algo está mal")
        }

        const payload = {
            ...req.body,
            role: "GENERAL",
            password : hashPassword
        }

        const userData = new userModel (payload)
        const saveUser = await userData.save()
                
        res.status(201).json({
            data : saveUser,
            success : true,
            error : false,
            message : "Usuario creado corretamente!"
        })

    }catch(err){
        
        res.json({
            message : err.message || err,
            error : true,
            success : false,
        })
    }
}

module.exports = userSignUpcontroller