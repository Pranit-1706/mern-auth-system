import jwt from "jsonwebtoken";

export const authicated = (req, res, next) => {
    const auth = req.headers['authorization'];

    if(!auth){
        return res.status(401).send({
            message:"Authorization token is required"
        })
    }

    try{
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(e){
        res.status(401).send({
            message:"Invalid token"
        })
    }
}