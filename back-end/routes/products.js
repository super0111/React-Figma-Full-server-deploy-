const router = require('express').Router();
const { json } = require('express/lib/response');
const mongoose = require('mongoose');

const {
    getProducts,
    searchProducts,
    createNewProduct,
    deleteProductById,
    deleteProducts,
    addLikedProduct,
    addViewedProduct,
    getYearlyProducts,
    getMonthlyProducts,
    getDailyProducts,
    getTopProducts,
    getAllProducts,
    getNewProducts,
    getAllNewProducts,
} = require('../controller/products');

router.get('/', getProducts);
router.get('/search', searchProducts);
router.get('/yearly', getYearlyProducts);
router.get('/monthly', getMonthlyProducts);
router.get('/daily', getDailyProducts);
router.get('/top', getTopProducts);
router.get('/all', getAllProducts);
router.get('/new', getNewProducts);
router.get('/new/all', getAllNewProducts);

router.post('/', createNewProduct);
router.post('/add/liked', addLikedProduct);
router.post('/add/viewed', addViewedProduct);

router.delete('/:id', deleteProductById);
router.delete('/', deleteProducts);

module.exports = router;
