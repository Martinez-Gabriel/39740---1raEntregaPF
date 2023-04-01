import express from 'express';
import productRouter from './routes/productRouter.js';


const app = express();

//MIDDLEWARE REQ.QUERY
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productRouter);
// app.use('api/carts', productCarts);

//CONFIGURACION DE PUERTO
app.listen(8080, () => {
    console.log("Server listening on port 8080");
  });