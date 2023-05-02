import ProductManager from "../managers/productManager";

class ProductController
{
  static list = async  (req, res) =>
  {
      const manager = new ProductManager();

      const products = await manager.find();
      res.send({ status: 'success', products });
  };
}

export const getOne = async (req, res) =>
{
    const { id } = req.params;

    const manager = new ProductManager();

    const product = await manager.getOne(id);
    res.send({ status: 'success', product: product });
};

export const save = async (req, res) =>
{
  const manager = new ProductManager();
  const product = await manager.create(req.body);

  res.send({ status: 'success', product, message: 'Product created.' })
};

export const update = async (req, res) =>
{
  const { id } = req.params;

  const manager = new ProductManager();

  const result = await manager.updateOne(id, req.body);

  res.send({ status: 'success', result, message: 'Product updated.' })
};

export const deleteOne = async (req, res) =>
{
  const { id } = req.params;

  const manager = new ProductManager();

  const product = await manager.deleteOne(id);
  res.send({ status: 'success', message: 'Product deleted.' })
};

export default ProductController;
