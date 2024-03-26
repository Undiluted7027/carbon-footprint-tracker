const express = require('express');
const cors = require('cors');
const db = require('./firebase');
const app = express();
const userRoute = require('./routes/userRoutes');
const transportationRoute = require('./routes/transportationRoutes');
const foodRoute = require('./routes/foodRoutes');

app.use(cors());
app.use(express.json());
app.use('/api', userRoute);
app.use('/api/transportation', transportationRoute);
app.use('/api/food', foodRoute);

app.listen(3000, () =>
    console.log(`Server is live`),
  );