import {request, response} from "express";
import MailingManager from "../../domain/managers/mailingManager.js";

export const send = async (req = request, res = response) => {
    try {
        const manager = new MailingManager();
        await manager.send();
        res.status(201).send({status: 'success'});
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};