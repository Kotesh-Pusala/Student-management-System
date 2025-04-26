import express from 'express';

import { createproducts, deleteproducts, getProducts, updatedProducts } from '../controllers/product.controller.js';


const router = express.Router();





router.get("/",getProducts);


// post method


router.post("/",createproducts);


//delete method


router.delete("/:id",deleteproducts);

router.put("/:id",updatedProducts);



export default router;
