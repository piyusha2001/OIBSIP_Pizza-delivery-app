require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const passwordResetRoutes = require('./routes/passwordReset');
const pizzasRoute = require('./routes/pizzasRoute');
const myoPizzaRoute = require('./routes/myopizza');
const paymentRoute = require('./routes/payment');
//connect database
connection();

//middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/password-reset', passwordResetRoutes);
app.use('/api/pizzas', pizzasRoute);
app.use('/api/myopizza', myoPizzaRoute);
app.use('/api/payment', paymentRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
