const express = require('express');
const cors = require('cors');
const db = require('./firebase');
const app = express();
const userRoute = require('./routes/userRoutes');


app.use(cors());
app.use(express.json());
app.use('/api', userRoute);

app.listen(3000, () =>
    console.log(`Server is live`),
  );