const express = require("express");
const ProductManager = require("./productManager");

const app = express();

const productManager = new ProductManager();

//MIDDLEWARE REQ.QUERY
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//GET PRODUCT POR LIMIT.
app.get('/api/products', async (req, res) => {
  const limit = +req.query.limit;
  try {
    const products = await productManager.getProducts();
    if (limit) {
      const productLimit = products.slice(0, limit);
      console.log(productLimit);
      res.send(productLimit);
    } else {
      console.log(products);
      res.send(products);
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

//GET PRODUCT POR ID.
app.get('/api/products/:pid', async (req, res) => {
  const pid = +req.params.pid;
  try {
    const product = await productManager.getProductsById(pid);
    console.log(product);
    res.send(product);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

//POST AGREGAR UN NUEVO PRODUCTO.
app.post('/api/products', async (req, res) => {
  let product = req.body;
  const products = await productManager.getProducts();
  
  if( !product.title || !product.description || !product.code || !product.price || !product.status || !product.stock || !product.category || !product.thumbnail)
  {
    return res.status(400).send({status: 'error', error: 'Valores incompletos.'});  
  }

  
  products.push(await productManager.addProduct(product));

  res.status(201).send({status:'success', message: 'Product created'})
  
});

//PUT ACTUALIZAR UN PRODUCTO.

app.put('/api/products/:pid', async (req, res) => {
  let product = req.body;
  let pid = req.params.id;

  if( !product.title || !product.description || !product.code || !product.price || !product.status || !product.stock || !product.category || !product.thumbnail)
  {
    return res.status(400).send({status: 'error', error: 'Valores incompletos.'});  
  }

  await(productManager.updateProduct(pid));
  res.status(200).send({status: 'success', message:'Product modified'})

});

//DELETE ELIMINAR UN PRODUCTO.

app.delete('/api/products/:pid', async (req, res) => {
  const pid = +req.params.pid;
  const products = await productManager.getProducts();
  let currentLength = products.length;
    if (products.length === currentLength){
      res.status(404).send({status:'error', error:'Product not found'});
    }
    const deleteProduct = await (productManager.deleteProduct(pid));
    console.log(deleteProduct);
    res.status(200).send({status:'success', message:'Product delete'});
});


//CONFIGURACION DE PUERTO
app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
