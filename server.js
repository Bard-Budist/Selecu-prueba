import express from 'express';
import cors from 'cors';
import './database.js';
import UserRoute from './routes/user.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express()
const port = process.env.PORT;

app.use(cors({ origin: '*' }));
app.use(express.json());

// Routes
app.use('/api/user', UserRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
