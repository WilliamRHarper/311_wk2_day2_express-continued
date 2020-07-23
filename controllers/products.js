const products = require('../data/products');
const productCount = products.length;

const list = (req, res) => {
    res.json(products);
  };

const show = (req, res) => {
    const id = req.params.productId;
  
    const foundProduct = products.find((product) => product._id === Number(id));
    res.json(foundProduct);
  };

const create = (req, res) => {
    const newProduct = {
      _id: productCount + 1,
      ...req.body,
    };
  
    products.push(newProduct);
    res.json(newProduct);
  };

module.exports = {
    list, 
    show, 
    create
}