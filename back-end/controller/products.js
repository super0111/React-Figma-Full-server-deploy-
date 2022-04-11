const Products = require('../model/Products');
const LikedProducts = require('../model/LikedProducts');

const getProducts = async (req, res) => {
    const mobiles = await Products.find({ type: 'mobile' });
    const websites = await Products.find({ type: 'web' });
    const recents = await Products.find(
        {
            "date": 
            {
                $gte: new Date((new Date().getTime() - (15 * 24 * 60 * 60 * 1000)))
            }
        }
    )
    .sort({ "date": -1 })
    return res.send({
        mobiles: mobiles,
        websites: websites,
        recents: recents,
    });
}

const searchProducts = async (req, res) => {
    const { keyword, userId } = req.query;
    const searchResults = await Products.find({productName:{$regex: keyword, $options: 'i'}});
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

const createNewProduct = async (req, res) => {
    const {
        productName,
        subName,
        type,
    } = req.body;

    const newProduct = new Products({
        productName: productName,
        subName: subName,
        type: type,
        liked: false,
        viewed: false,
    })

  const savedProduct = await newProduct.save();

    return res.send({
        status: 'ok',
        data: savedProduct
    });
}

const deleteProductById = async (req, res) => {
    const { id } = req.params;
    const product = await Products.findById(id);
    if (!product) {
        return res.status(404).send({
          message: `Collection with ID: ${id} does not exist in database.`,
        });
    }
    await Products.findByIdAndDelete(id);
    return res.send({
        status: 'ok',
        deletedId: id,
    });
}

const deleteProducts = async(req, res) => {
    await Products.remove({});
}

const addLikedProduct = async (req, res) => {
    const {
        userId: userId, 
        productId: productId,
    } = req.body;
    const existed = await Products.findById(productId);
    if(existed){
        existed.liked= existed.liked + 1;
        existed.save();
        return res.send({
            status: 'ok',
            message: 'already exist',
        });
    }else{
        return res.send({
            status: 'error',
            message: 'dont exist',
        });
    }
}

const addViewedProduct = async (req, res) => {
    const {
        userId: userId, 
        productId: productId,
    } = req.body;
    const existed = await Products.findById(productId);
    if(existed){
        existed.viewed = existed.viewed + 1;
        existed.save();
        return res.send({
            status: 'ok',
            message: 'already exist',
        });
    }else{
        return res.send({
            status: 'error',
            message: 'dont exist',
        });
    }
}

const getYearlyProducts = async(req, res) => {
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), 0, 1);
    const lastDay = new Date(date.getFullYear(), 12, 30);
    const counts = await Products.find({createdDate: {$gte: firstDay, $lt: lastDay}}).count();
    return res.send({
        status: 'ok',
        counts: counts,
    })
}

const getMonthlyProducts = async(req, res) => {
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const counts = await Products.find({createdDate: {$gte: firstDay, $lt: lastDay}}).count();
    return res.send({
        status: 'ok',
        counts: counts,
    })
}

const getDailyProducts = async(req, res) => {
    let start = new Date();
    start.setHours(0,0,0,0);
    let end = new Date();
    end.setHours(23,59,59,999);
    const counts = await Products.find({createdDate: {$gte: start, $lt: end}}).count();
    return res.send({
        status: 'ok',
        counts: counts,
    })
}

const getTopProducts = async (req, res) => {
    const query = {};
    const sort = { liked: -1, viewed: -1 };
    const limit = 6;
    const topProducts = await Products.find(query).sort(sort).limit(limit);
    return res.send({
        status: 'ok',
        products: topProducts,
    });
}

const getAllProducts = async (req, res) => {
    const query = {};
    const sort = { liked: -1, viewed: -1 };
    const products = await Products.find(query).sort(sort);
    return res.send({
        status: 'ok',
        products: products,
    });
}

const getNewProducts = async (req, res) => {
    const query = {};
    const sort = { createdDate: -1 };
    const limit = 6;
    const topProducts = await Products.find(query).sort(sort).limit(limit);
    return res.send({
        status: 'ok',
        products: topProducts,
    });
}

const getAllNewProducts = async (req, res) => {
    const query = {};
    const sort = { createdDate: -1 };
    const products = await Products.find(query).sort(sort);
    return res.send({
        status: 'ok',
        products: products,
    });
}
module.exports = {
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
};
  