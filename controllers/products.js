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
      rating: Math.ceil(Math.random() * 3),
      imgUrl: "http://dummyimage.com/189x109.png/cc0000/ffffff",
      price: Math.floor(Math.random() * 100), 
      category: "sporting",
      reviews: [{
        "description": "architect revolutionary deliverables",
        "rating": 2
      }, {
        "description": "orchestrate dynamic schemas",
        "rating": 2
      }, {
        "description": "aggregate integrated convergence",
        "rating": 4
      }
    ]
    };
  
    products.push(newProduct);
    res.json(newProduct);
  };

module.exports = {
    list, 
    show, 
    create
}