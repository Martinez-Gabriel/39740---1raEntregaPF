import { request, response } from 'express';
import ProductManager from './productManager.js';

export const Home = async (req = request, res = response) => {
    try {
        const product = new ProductManager();
        const listProducts = await product.getProducts();
        res.render('home', { title: 'Stock de Productos', listProducts})
    }catch (error){
        res.status(404).send(error);
    }
}