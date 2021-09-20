const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

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

router.get('/web1', ensureAuthenticated, async (req, res) =>{
  res.render('web1', {
    title: 'Canteen 1 | Welcome',
    styles: ['https://www.w3schools.com/w3css/4/w3.css','https://fonts.googleapis.com/css?family=Amatic+SC'],
    layout: "layout2",
    //user: req.user
  })}
);
router.get('/web2', ensureAuthenticated, async (req, res) =>{
  res.render('web2', {
    title: 'Canteen 2 | Welcome',
    styles: ['https://www.w3schools.com/w3css/4/w3.css','https://fonts.googleapis.com/css?family=Amatic+SC'],
    layout: "layout2",
    //user: req.user
  })}
);
router.get('/web3', ensureAuthenticated, async (req, res) =>{
  res.render('web3', {
    title: 'Canteen 3 | Welcome',
    styles: ['https://www.w3schools.com/w3css/4/w3.css','https://fonts.googleapis.com/css?family=Amatic+SC'],
    layout: "layout2",
    //user: req.user
  })}
);

module.exports = router;
