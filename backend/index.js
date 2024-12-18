import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import {connectDb} from './utils/db.js';
// import cors from 'cors'; //for web

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
// app.use(cors({ origin: 'http://localhost:5173', credentials: true })); //for web

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
  connectDb();
});
