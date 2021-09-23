
//const { exists } = require('../../models/products');
var Product = require('../models/products');
const  mongoose  = require('mongoose');
const db = require('../config/keys').mongoURI;
//const { exists } = require('../models/products');

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));



var products = [new Product({
    foodid: 'snacks',
    title: 'Veg Momo',
    desc: 'Fresh tomatoes, fresh cabbage, fresh soup',
    price: 50
}),
new Product({
    foodid: 'snacks',
    title: 'Chicken Momo',
    desc: 'Fresh chicken, fresh cabbage, fresh soup',
    price: 80
}),
new Product({
    foodid: 'snacks',
    title: 'Veg Burger',
    desc: 'Fresh bread, fresh tomatoes, fresh onions',
    price: 25
}),

new Product({
    foodid: 'snacks',
    title: 'Chicken Burger',
    desc: 'Fresh bread, fresh chicken, fresh onion',
    price: 60
}),
new Product({
    foodid: 'snacks',
    title: 'Chowmein',
    desc: 'Spicy and tasty chowmein ',
    price: 50
}),
new Product({
    foodid: 'snacks',
    title: 'Egg Roll',
    desc: 'Fresh bread and 2 whole eggs',
    price: 30
}),
new Product({
    foodid: 'lunch',
    title: 'Puri Sabji',
    desc: 'Crispy puri and spicy sabji',
    price: 20
}),
new Product({
    foodid: 'lunch',
    title: 'Veg Meal',
    desc: 'Rice, dal and sabji',
    price: 30
}),
new Product({
    foodid: 'lunch',
    title: 'Chicken Meal',
    desc: 'Rice, dal and chicken',
    price: 40
}),
new Product({
    foodid: 'lunch',
    title: 'Fish Meal',
    desc: 'Rice, dal and fish',
    price: 40
}),
new Product({
    foodid: 'drinks',
    title: 'Coke',
    desc: 'Refreshing coke',
    price: 30
}),
new Product({
    foodid: 'drinks',
    title: 'Coffee',
    desc: 'Strong and warm coffee',
    price: 15
}),
new Product({
    foodid: 'drinks',
    title: 'Tea',
    desc: 'Warm and tasty tea',
    price: 10
}),
new Product({
    foodid: 'drinks',
    title: 'Water',
    desc: 'Chilled water',
    price: 10
}),


];
var done = 0;
for (var i=0; i<products.length; i++){
    products[i].save(function(err,result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();

}
