const Collection = require('../model/Collections');

const createNewCollection = async (req, res) => {
    const {
        collectionName,
        description,
    } = req.body;

    const newCollection = new Collection({
        collectionName: collectionName,
        description: description,
    })

    const savedCollection = await newCollection.save();

    return res.send({
        status: 'ok',
        data: savedCollection
    });
}

const getCollections = async (req, res) => {
    const collections = await Collection.find({});
    return res.send({
        collections: collections,
    });
}

const searchCollections = async (req, res) => {
    const { keyword } = req.query;
    const searchResults = await Collection.find({collectionName:{$regex: keyword, $options: 'i'}});
    if(searchResults){
        return res.send({
            searchResults: searchResults,
        });
    }else{
        return res.send({
            status: 'error',
            searchResults: [],
        });
    }
}

const getCollectionById = async (req, res) => {
    const { id } = req.query;
    const collection = await Collection.find({_id: id});
    if(collection){
        return res.send({
            collection: collection,
        });
    }else{
        return res.send({
            status: 'error',
            collection: [],
        });
    }

}

const deleteCollectionById = async (req, res) => {
    const { id } = req.params;
    const collection = await Collection.findById(id);
    if (!collection) {
        return res.status(404).send({
          message: `Collection with ID: ${id} does not exist in database.`,
        });
    }
    await Collection.findByIdAndDelete(id);
    return res.send({
        status: 'ok',
        deletedId: id,
    });
}

const upDateCollection = async (req, res) => {
    const { id } = req.params;
    const {
        collectionName,
        description,
    } = req.body;
    
    const collection = await Collection.findById(id);
    if(!collection){
        return res.status(404).send({
            message: `Collection with ID: ${id} does not exist in database.`,
        });
    }

    collection.updatedAt = Date.now();
    collection.collectionName = collectionName;
    collection.description = description;

    const savedCollection = await collection.save();
    return res.send({
        status: 'ok',
        collection: savedCollection,
    });
}

module.exports = {
    getCollections,
    getCollectionById,
    createNewCollection,
    deleteCollectionById,
    upDateCollection,
    searchCollections
};
  