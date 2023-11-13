import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import itemsRoutes from './routes/Items.mjs';
import toppingsRoutes from './routes/Toppings.mjs'

dotenv.config();

const app = express();
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 2000;

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());


app.use('/items', itemsRoutes);
app.use('/toppings',toppingsRoutes);

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
    app.get('/', (req, res) => {
      res.send('we on "/"');
      });
    })
  .catch((err) => console.error(err));