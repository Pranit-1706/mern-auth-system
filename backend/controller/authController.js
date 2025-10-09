import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 

export const Signup = async(req, res) => {
    try{
        const body = req.body;

        if(!body.name || !body.email || !body.password){
            return res.status(400).send({
                message:"All fields are required"
            })
        }

        const existingUser = await userModel.findOne({email:body.email});

        if(existingUser){
            return res.status(400).send({
                message:"User already exists"
            })
        }

        const passwordHash = await bcrypt.hash(body.password,10);

        const user = await userModel.create({
            name: body.name,
            email: body.email,
            password: passwordHash
        })

        res.json({
            message:"User registered successfully",
        })

    }catch(e){
        res.status(401).send({
            message:e.message
        })
    }
}

export const Login =async (req, res) => {
    try{
        const body = req.body;
        if(!body.email || !body.password){
            return res.status(400).send({
                message:"All fields are required"
            })
        }

        const user = await userModel.findOne({email:body.email});

        if(!user){
            return res.status(400).send({
                message:"User does not exist"
            })
        }

        const isPasswordValid = await bcrypt.compare(body.password, user.password);

        if(!isPasswordValid){
            return res.status(400).send({
                message:"Invalid credentials"
            })
        }

        const token = jwt.sign({id:user._id, email:user.email}, process.env.JWT_SECRET, {expiresIn:"1d"});

        res.json({
            message:"User logged in successfully",
            token,
            user: user.name
        })

    }catch(e){
        res.status(401).send({
            message:e.message
        })
    }
}