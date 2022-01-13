import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        /* eslint-disable no-console */
        console.log(`Connected to database ${process.env.MONGO_URI}`);
    })
    .catch((err) => {
        /* eslint-disable no-console */
        console.error(err);
    });

export default mongoose;