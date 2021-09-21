
//const { exists } = require('../../models/products');
var Product = require('../models/products3');
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



var products3 = [new Product({
    title: 'Coke',
    desc: 'Refreshing coke',
    price: 30
}),
new Product({
    title: 'Coffee',
    desc: 'Strong and warm coffee',
    price: 15
}),
new Product({
    title: 'Tea',
    desc: 'Warm and tasty tea',
    price: 10
}),
new Product({
    title: 'Water',
    desc: 'Chilled water',
    price: 10
}),
];
var done = 0;
for (var i=0; i<products3.length; i++){
    products3[i].save(function(err,result){
        done++;
        if(done === products3.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();

}
