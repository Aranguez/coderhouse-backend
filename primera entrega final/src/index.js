import express from 'express';

import { config } from "./config/index.js";
import { ProductRouter, CartRouter } from "./routers/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', ProductRouter);
app.use('/api/cart', CartRouter);
app.get('*', (req, res) => {
  res.json({
    error: -2,
    description: `ruta ${req.path} método ${req.method} no implementada`
  })
})

app.listen(config.SERVER.PORT, () => console.log(`App running at port ${config.SERVER.PORT}`))