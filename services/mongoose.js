  
const mongoose = require('mongoose');

//Mongoose cfg
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/visao-computacional', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>{
    console.log('Mongodb connected.')
}).catch((err)=>{
    console.log(`Mongodb error: ${err}`)
})

module.exports = mongoose;