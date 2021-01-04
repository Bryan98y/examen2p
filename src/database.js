import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://BryanYandun:1234@cluster0.qd4wd.mongodb.net/test")
.then(db => console.log('BD connected'))
.catch(err => console.log(err));