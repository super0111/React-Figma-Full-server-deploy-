const router = require('express').Router();
const { json } = require('express/lib/response');
const mongoose = require('mongoose');

const {
    createNewCollection,
    getCollections,
    getCollectionById,
    deleteCollectionById,
    upDateCollection,
    searchCollections
} = require('../controller/collection');

router.get('/', getCollections);
router.get('/detail', getCollectionById);
router.get('/search', searchCollections);

router.post('/', createNewCollection);

router.delete('/:id', deleteCollectionById);
router.put('/:id', upDateCollection);

module.exports = router;
