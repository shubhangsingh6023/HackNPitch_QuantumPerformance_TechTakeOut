
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
    title: 'Veg Momo',
    desc: 'Fresh tomatoes, fresh cabbage, fresh soup',
    price: 50
}),
new Product({
    title: 'Chicken Momo',
    desc: 'Fresh chicken, fresh cabbage, fresh soup',
    price: 80
}),
new Product({
    title: 'Veg Burger',
    desc: 'Fresh bread, fresh tomatoes, fresh onions',
    price: 25
}),

new Product({
    title: 'Chicken Burger',
    desc: 'Fresh bread, fresh chicken, fresh onion',
    price: 60
}),
new Product({
    title: 'Chowmein',
    desc: 'Spicy and tasty chowmein ',
    price: 50
}),
new Product({
    title: 'Egg Roll',
    desc: 'Fresh bread and 2 whole eggs',
    price: 30
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
