import mongoose from "mongoose";



const connectDB = (DATABASE_URL) => {
     
    mongoose.set('strictQuery', false);
    return mongoose.connect(DATABASE_URL).then(() => {
        console.log('Connected Successfully...');
    }).catch((err) => {
        {
            console.log(err);
        }
    });
}

// async function  using 
const asyncConnect = async (DATABASE_URL) => {
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(DATABASE_URL);
        console.log('Connected Successfully...');
    }catch(err){
        console.log(err);
    }
}

// export default connectDB;
export default asyncConnect;