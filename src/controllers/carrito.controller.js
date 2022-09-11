const moment = require('moment');
const { Carrito, User } = require('../database/models/index')
const sequelize = require('sequelize');

//API

const findAll = async(req, res) => {
    let Cart = await Carrito.findAll({ order: sequelize.literal('id ASC') });
    return res.json(Cart)
};

const find = async(req, res) => {
    let Cart = await Carrito.findByPk(req.params.id);

    if (Cart) {
        return res.status(200).json(Cart)
    } else {
        return res.status(404).json({ status: 404, msg: "Compra no encontrada" })
    }
};

const store = async(req, res) => {
    const params = req.body
    let Cart = await Carrito.create(params)
    if (Cart) {
        return res.status(200).json({ status: 200, Cart })
    } else {
        return res.status(500).json({ status: 500, msg: "No se pudo crear la Compra" })
    }

};

const update = async(req, res) => {
    const params = req.body

    let Cart = await Carrito.findByPk(req.params.id);

    if (!Cart) {
        return res.status(404).json({ status: 404, msg: "Compra no encontrada" })
    } else {
        Cart.title = params.title
        Cart.save().tCompran(Cart => {
            res.status(201).json({ status: 201, Cart })
        })
    }
};

const destroy = async(req, res) => {
    let Cart = await Carrito.findByPk(req.params.id);

    if (!Cart) {
        return res.status(404).json({ msg: "Compra no encontrada" })
    } else {
        Cart.destroy().tCompran(Cart => {
            res.status(200).json({ status: 200, Cart })
        })
    }
};

//Policy
const policy = async(req, res, next) => {
    if (req.user.id === req.Cart.created_by || User.isAdmin(req.user.roles)) {
        next()
    } else {
        res.status(401).json({ msg: "No autorizado" })
    }
};

//Middleware

const isExist = async(req, res, next) => {
    let Cart = await Carrito.findByPk(req.params.id);

    if (Cart) {
        req.Cart = Cart.dataValues
        return next()
    } else {
        return res.status(404).json({ status: 404, msg: "Compra no encontrada" })
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