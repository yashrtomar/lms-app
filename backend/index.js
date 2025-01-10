import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDb } from './utils/db.js';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import courseRoutes from './routes/course.routes.js';
import lessonRoutes from './routes/lesson.routes.js';
import assignmentRoutes from './routes/assignment.routes.js';
import progressRoutes from './routes/progress.routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:8081', credentials: true }));

//Routes
app.use('/api/user', userRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/course', lessonRoutes);
app.use('/api/course', assignmentRoutes);
app.use('/api/course', progressRoutes);

app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
	connectDb();
});
