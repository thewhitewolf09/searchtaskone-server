const ProductList = require("../model/productSchema");
const APIFeatures = require("../utils/apiFeatures");



// get product = api/v1/products?keyword=apple
exports.getProducts = async (req, res, next) => {
    const product_list = await ProductList.find();

    res.status(200).json({
        success: true,
        product_list
    })
} 

// get all products from the store by using searchbar
exports.getSearchedProductList = async (req, res, next) => {    


    const apiFeatures = new APIFeatures(ProductList.find(), req.body)
        .search()

    const product = await apiFeatures.query;

    res.status(200).json({
        success: true,
        product
    })
} 