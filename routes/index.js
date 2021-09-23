const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const Product = require('../models/products');
const Product2 = require('../models/products2');
const Product3 = require('../models/products3');
var Cart = require('../models/cart');
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
   //var products2 = await  Product2.find({}).lean();
   //var products3 = await  Product3.find({}).lean();

   res.render('web4', {
    title: 'Canteen 1 | Welcome',
    styles: ['https://www.w3schools.com/w3css/4/w3.css','https://fonts.googleapis.com/css?family=Amatic+SC','link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"'],
    layout: "layout2",
    products: products,
    //products2: products2,
    //products3: products3
   });
      
      
    
      //user: req.user

    
   
  }
);
router.get('/web2', ensureAuthenticated, async (req, res) =>{
   var products = await  Product.find({}).lean();
   //var products2 = await  Product2.find({}).lean();
   //var products3 = await  Product3.find({}).lean();

  res.render('web2', {
    title: 'Canteen 2 | Welcome',
    styles: ['https://www.w3schools.com/w3css/4/w3.css','https://fonts.googleapis.com/css?family=Amatic+SC'],
    layout: "layout2",
    products: products,
    //products2: products2,
    //products3: products3
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
router.get('/add-to-cart/:id', ensureAuthenticated, async (req, res) => {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : { item: [Object], qty: 0, price: 0});

    Product.findById(productId, function (err, product) {
      if (err) {
        return res.redirect('/web4');
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/web4');

    });
  });
    router.get('/add-to-cart2/:id', ensureAuthenticated, async (req, res) => {
      var productId = req.params.id;
      var cart = new Cart(req.session.cart ? req.session.cart : { item: [Object], qty: 0, price: 0});
  
      Product.findById(productId, function (err, product) {
        if (err) {
          return res.redirect('/web2');
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/web2');
  
      });
  });
  router.get('/add-to-cart3/:id', ensureAuthenticated, async (req, res) => {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart :  {} );

    Product.findById(productId, function (err, product) {
      if (err) {
        return res.redirect('/web3');
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/web3');

    });
});
router.get('/view_cart',ensureAuthenticated,  (req,res,next)=>{
  if(!req.session.cart){
    return res.render('view_cart', {products: null, styles:['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'], layout: "layout2"});
  }
  const cart = new Cart(req.session.cart);
  res.render('view_cart', {products:cart.generateArray(), totalPrice: cart.totalPrice, styles:['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css','../css/dashboard.css'],layout: "layout2"});
});
router.get('/checkout', ensureAuthenticated, (req, res, next)=>{
  //check to see if a shopping cart exists
  if(!req.session.cart){
      return res.redirect('/view_cart');
  }
  const cart = new Cart(req.session.cart);
  //const errMsg = req.flash('error')[0];
  return res.render('checkout',{total: cart.totalPrice,layout:"layout2",styles:['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css']});
});

module.exports = router;
