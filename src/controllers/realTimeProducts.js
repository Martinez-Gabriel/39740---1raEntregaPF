import { request, response } from 'express';
import ProductManager from './productManager.js';

export const getRealTimeProducts = async (req = request, res = response) => {
    try {
        const product = new ProductManager();
        const listProducts = await product.getProducts();
        res.render('realTimeProducts', { title: 'Stock de Productos en timepo real!', listProducts})
    }catch (error){
        res.status(404).send(error);
    }
}