const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true

});

const User = mongoose.model('User',{
    name:{
        type:String
    },
    age:{
        type:Number
    }
})

const user = new User({
    name:'Omar',
    age:30,
})
user.save().then(()=>{
    console.log(user)
}).catch((error)=>{
    console.log(error)
})
