import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import recipesRoute from './routes/recipes.routes.js'

// Create express app
const app = express();

// Use middlewares
/*app.use(express.json());
app.use(express.urlencoded({extended: false}));*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(express.static('uploads'))


// Use routes
app.use(recipesRoute)


// Make database connection
await mongoose.connect(process.env.MONGO_URI);


// Listen for incoming
const port = process.env.Port || 4000;
app.listen(port, () => {
    console.log(`Express app is running on port ${port}`);
});

