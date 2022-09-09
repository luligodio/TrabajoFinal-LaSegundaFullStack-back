const moment = require('moment');
const { Producto, User } = require('../database/models/index')
const sequelize = require('sequelize');

//API


const findAll = async(req, res) => {
    let Productos = await Producto.findAll({ order: sequelize.literal('id ASC') });
    return res.json(Productos);
};

const find = async(req, res) => {
    let Productos = await Producto.findByPk(req.params.id);

    if (Productos) {
        return res.status(200).json(Productos)
    } else {
        return res.status(404).json({ status: 404, msg: "Producto no encontrada" })
    }
};

const store = async(req, res) => {
    const params = req.body
    let Productos = await Producto.create(params)
    if (Productos) {
        return res.status(200).json({ status: 200, Productos })
    } else {
        return res.status(500).json({ status: 500, msg: "No se pudo crear la Producto" })
    }

};

const update = async(req, res) => {
    const params = req.body

    let Productos = await Producto.findByPk(req.params.id);

    if (!Productos) {
        return res.status(404).json({ status: 404, msg: "Producto no encontrada" })
    } else {
        Productos.title = params.title
        Productos.save().then(Productos => {
            res.status(201).json({ status: 201, Productos })
        })
    }
};

const destroy = async(req, res) => {
    let Productos = await Producto.findByPk(req.params.id);

    if (!Productos) {
        return res.status(404).json({ msg: "Producto no encontrada" })
    } else {
        Productos.destroy().then(Productos => {
            res.status(200).json({ status: 200, Productos })
        })
    }
};

//Policy
const policy = async(req, res, next) => {
    if (req.user.id === req.Productos.created_by || User.isAdmin(req.user.roles)) {
        next()
    } else {
        res.status(401).json({ msg: "No autorizado" })
    }
};

//Middleware

const isExist = async(req, res, next) => {
    let Productos = await Producto.findByPk(req.params.id);

    if (Productos) {
        req.Productos = Productos.dataValues
        return next()
    } else {
        return res.status(404).json({ status: 404, msg: "Producto no encontrada" })
    }
};

module.exports = {
    findAll,
    find,
    store,
    update,
    destroy,
    isExist,
    policy
}