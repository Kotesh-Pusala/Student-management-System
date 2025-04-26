import Product  from "../models/product.model.js";
import mongoose from "mongoose";


export const getProducts=async(req,res)=>{
    try{ 
        const products = await Product.find({});
        res.status(200).json({success:true,data:products});
    }catch(error){
        console.log("error in fetching the products:",error.message);
        res.status(500).json({success:false,message:"server Error"});

    }
};      


export const createproducts = async(req,res)=>{
    const product =req.body; // user will send this data 

    if (!product.studentId || !product.firstName || ! product.lastName || ! product.email || !product.dob || !product.department || !product.enrollmentYear || !product.isActive){
        return res.status(400).json({success: false ,message:"please provide all the fields"});
    }

    const newProduct = new Product(product);
    try{
        await newProduct.save();
        res.status(201).json({success:true,data: newProduct});
    }catch(error){
        console.error("Error in Create product: ",erro.message); 
        res.status(500).json({success:false , message:"server Error"}); 
    }


};

export const deleteproducts =async(req,res)=>{
    const {id}= req.params
    console.log("id: " ,id);

    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({succes: true ,mesaage:"product deleted"});

    }catch(error){
        console.log("error in deleting the product:" ,error.message);
        res.status(404).json({success:false,message:"product mot found"});


    }



};

export const updatedProducts=async(req,res)=>{
    const {id} =req.params;

    const product =req.body;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"invalid product id"});
    }
    try {
        const updatedProduct=await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({succes:true,data:updatedProduct});
    } catch (error) {
        res.status(500).json({success:false,message:"server error"});
        
    }

};