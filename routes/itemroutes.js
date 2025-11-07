const express = require('express');
const router = express.Router();
const{createProduct,getProducts,getproductbyID,updateproductbyID,deleteproductbyID}= require('../controllers/productController');
router.route('/').get(getProducts).post(createProduct);
router.route('/:id').get(getproductbyID).put(updateproductbyID).delete(deleteproductbyID);
module.exports = router;