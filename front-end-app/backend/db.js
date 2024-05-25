const mongoose = require('mongoose');
mongoose.set('strictQuery', false); // Add this line to suppress the deprecation warning

const mongoURI='mongodb+srv://shabareeshabv05:zyoD69UPIJTf03Pv@cluster0.r11yocs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true}, (err, result) => {
        if (err) {
            console.log("---",err);
        } else {
            console.log("Connected");
        }
    });
};

module.exports = mongoDB;
