import mongoose from "mongoose";

const ConnectDatabase = async (DATABASE_URL) => {
    try {

        const DB_OPTION = {
            user : 'prince',
            pass : 'secret',
            dbName : 'collagedb',
            authSource : 'collagedb'
        }
        
        mongoose.set('strictQuery', false);
        await mongoose.connect(DATABASE_URL, DB_OPTION);
        console.log('Connected Successfully...');

    } catch (err) {
        console.log(err);
    }
}

export default ConnectDatabase;