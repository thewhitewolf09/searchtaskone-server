const express = require('express');
const router = express.Router()


const { getProducts ,getSearchedProductList} = require("../controller/productController");


//api/v1/products 
router.route("/products").get(getProducts);

//api/v1/searchedproduct
router.route("/searchedproduct").post(getSearchedProductList);


module.exports = router;  