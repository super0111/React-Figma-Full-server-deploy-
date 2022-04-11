const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const fileUpload = require("express-fileupload");
const fs = require('fs-extra');
const mongoose = require('mongoose');

const productsRoute = require('./routes/products');
const collectionRoute = require('./routes/collection');
const accountRoute = require('./routes/account');
const userRoute = require('./routes/user');
const adminRoute = require('./routes/admin');
const VisitorRoute = require('./routes/visitor');

const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO_URL,
    () => console.log('💾 Connected to DB'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(fileUpload());

fs.mkdirsSync('./public/uploads/avatars');

app.use('/api/products', productsRoute);
app.use('/api/collection', collectionRoute);
app.use('/api/account', accountRoute);
app.use('/api/user', userRoute);
app.use('/api/admin', adminRoute);
app.use('/api/visitor', VisitorRoute);

app.listen(443,() => console.log("Server listening at port 443"));
