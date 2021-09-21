const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const Product = require('../models/products');
const Product2 = require('../models/products2');
const Product3 = require('../models/products3');
const Cart = require('../models/cart');
// Welcome Page
router.get('/', forwardAuthenticated, async (req, res) => {
  res.render('welcome',{
    title: 'welcome to Techout',
    styles: ['../css/welcome.css',
             'https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900',
             'https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i'],
    hide: false,
    layout: "layout2"
  })});

// Dashboard
router.get('/dashboard', ensureAuthenticated, async (req, res) =>{
  res.render('dashboard', {
    title: 'Techout dashboard | Welcome',
    styles: ['../css/dashboard.css','../css/w3schl.css'],
    layout: "layout2",
    user: req.user
  })}
);

router.get('/web4', ensureAuthenticated, async (req, res) =>{
   var products = await  Product.find({}).lean();
   var products2 = await  Product2.find({}).lean();
   var products3 = await  Product3.find({}).lean();

   res.render('web4', {
    title: 'Canteen 1 | Welcome',
    styles: ['https://www.w3schools.com/w3css/4/w3.css','https://fonts.googleapis.com/css?family=Amatic+SC'],
    layout: "layout2",
    products: products,
    products2: products2,
    products3: products3
   });
      
      
    
      //user: req.user

    
   
  }
);
router.get('/web2', ensureAuthenticated, async (req, res) =>{
   var products = await  Product.find({}).lean();
   var products2 = await  Product2.find({}).lean();
   var products3 = await  Product3.find({}).lean();

  res.render('web2', {
    title: 'Canteen 2 | Welcome',
    styles: ['https://www.w3schools.com/w3css/4/w3.css','https://fonts.googleapis.com/css?family=Amatic+SC'],
    layout: "layout2",
    products: products,
    products2: products2,
    products3: products3
    //user: req.user
  })}
);
router.get('/web3', ensureAuthenticated, async (req, res) =>{
   var products = await  Product.find({}).lean();
   var products2 = await  Product2.find({}).lean();
   var products3 = await  Product3.find({}).lean();

  res.render('web3', {
    title: 'Canteen 3 | Welcome',
    styles: ['https://www.w3schools.com/w3css/4/w3.css','https://fonts.googleapis.com/css?family=Amatic+SC'],
    layout: "layout2",
    products:products,
    products2: products2,
    products3: products3
    //user: req.user
  })}
);
router.get('/add-to-cart/:id', ensureAuthenticated, async (req,res) =>{
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});
        Product.findById(productId, function (err,product){
          if (err){
            return res.redirect('/');
          }
          cart.add(product,product.id);
          req.session.cart = cart;
          res.redirect('/web1');

        });
});

module.exports = router;
