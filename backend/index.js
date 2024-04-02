const express = require('express');
const cors = require('cors');
const db = require('./firebase');
const dotenv = require('dotenv');
const app = express();
const VerifyToken = require('./middleware/VerifyToken');

const userRoute = require('./routes/userRoutes');
const transportationRoute = require('./routes/transportationRoutes');
const foodRoute = require('./routes/foodRoutes');
const wasteRoute = require('./routes/wasteRoutes');

dotenv.config();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(VerifyToken);

app.get("/", (request, response) => {
  response.send("Working fine");
})
app.use('/api', userRoute);
app.use('/api/transportation', transportationRoute);
app.use('/api/food', foodRoute);
app.use('/api/waste', wasteRoute);

app.listen(PORT, () =>
    console.log(`Server is live`),
  );