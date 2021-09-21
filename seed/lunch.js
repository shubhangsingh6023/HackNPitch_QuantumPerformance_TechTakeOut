
//const { exists } = require('../../models/products');
var Product = require('../models/products2');
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



var products2 = [new Product({
    title: 'Puri Sabji',
    desc: 'Crispy puri and spicy sabji',
    price: 20
}),
new Product({
    title: 'Veg Meal',
    desc: 'Rice, dal and sabji',
    price: 30
}),
new Product({
    title: 'Chicken Meal',
    desc: 'Rice, dal and chicken',
    price: 40
}),
new Product({
    title: 'Fish Meal',
    desc: 'Rice, dal and fish',
    price: 40
}),
];
var done = 0;
for (var i=0; i<products2.length; i++){
    products2[i].save(function(err,result){
        done++;
        if(done === products2.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();

}
