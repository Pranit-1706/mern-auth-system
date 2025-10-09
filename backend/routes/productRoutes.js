import express from "express";
import { authicated } from "../middleware/productAuth.js";

const productRouter = express.Router();

productRouter.get('/',authicated, (req,res)=>{
    res.send([{
      "name": "Mobile Phone",
      "price": 300,
      "image": "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&h=300"
    },
    {
      "name": "Laptop",
      "price": 500,
      "image": "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=300"
    },
    {
      "name": "Smartwatch",
      "price": 80,
      "image": "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&h=300"
    },
    
    {
      "name": "Tablet",
      "price": 200,
      "image": "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&h=300"
    },
    {
      "name": "Gaming Console",
      "price": 450,
      "image": "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&h=300"
    },
    {
      "name": "Wireless Earbuds",
      "price": 500,
      "image": "https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg?auto=compress&cs=tinysrgb&h=300"
    },
    {
      "name": "Smart TV",
      "price": 600,
      "image": "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&h=300"
    },
    {
      "name": "Bluetooth Speaker",
      "price": 40,
      "image": "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&h=300"
    },]
);
})

export default productRouter;