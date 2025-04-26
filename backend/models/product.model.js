import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    studentId:{
        type:String,
        required: true

    },
    firstName:{
        type:String,
        required: true

    },
    lastName:{
        type:String,
        required: true 
    },
    email:{
        type:String,
        required: true
    },
    dob:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    enrollmentYear:{
        type:Number,
        required: true
    },
    isActive:{
        type:Boolean,
        required:true
    },
},{
    timestamps:true //

});

const Product = mongoose.model("product",productSchema);

export default Product;
