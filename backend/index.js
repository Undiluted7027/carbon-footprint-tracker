const express = require('express');
const cors = require('cors');
const db = require('./firebase');
const app = express();
const userRoute = require('./routes/userRoutes');
const transportationRoute = require('./routes/transportationRoutes');

app.use(cors());
app.use(express.json());
app.use('/api', userRoute);
app.use('/api/transportation', transportationRoute);

app.listen(3000, () =>
    console.log(`Server is live`),
  );