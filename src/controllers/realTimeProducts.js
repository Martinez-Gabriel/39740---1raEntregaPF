import { request, response } from "express";

export const getRealTimeProducts = async (req = request, res = response) => {
  try {
    const listProducts = [];

    res.render("realTimeProducts", {
      title: "Stock de Productos con Websocket",
      listProducts,
    });
  } catch (error) {
    res.status(404).send(error);
  }
};
