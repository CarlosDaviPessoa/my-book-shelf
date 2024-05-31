const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://carlosdavipessoa:<131121Md@>@cluster0.pxa568n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
