import mongoose from "mongoose";
mongoose.connect('mongodb://localhost/presupuesto-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(db => console.log('db is connected'))
.catch(err => console.log(err))