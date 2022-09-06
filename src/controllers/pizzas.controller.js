const moment = require('moment');
const { pizzas, User } = require('../database/models/index')
const sequelize = require('sequelize');

//API

const findAll = async(req, res) => {
    let pizza = await pizzas.findAll({ order: sequelize.literal('id ASC') });
    return res.json(pizza)
};

const find = async(req, res) => {
    let pizza = await pizzas.findByPk(req.params.id);

    if (pizza) {
        return res.status(200).json(pizza)
    } else {
        return res.status(404).json({ status: 404, msg: "Pizza no encontrada" })
    }
};

const store = async(req, res) => {
    const params = req.body
    let pizza = await pizzas.create(params)
    if (pizza) {
        return res.status(200).json({ status: 200, pizza })
    } else {
        return res.status(500).json({ status: 500, msg: "No se pudo crear la Pizza" })
    }

};

const update = async(req, res) => {
    const params = req.body

    let pizza = await pizzas.findByPk(req.params.id);

    if (!pizza) {
        return res.status(404).json({ status: 404, msg: "Pizza no encontrada" })
    } else {
        pizza.title = params.title
        pizza.save().then(pizza => {
            res.status(201).json({ status: 201, pizza })
        })
    }
};

const destroy = async(req, res) => {
    let pizza = await pizzas.findByPk(req.params.id);

    if (!pizza) {
        return res.status(404).json({ msg: "Pizza no encontrada" })
    } else {
        pizza.destroy().then(pizza => {
            res.status(200).json({ status: 200, pizza })
        })
    }
};

//Policy
const policy = async(req, res, next) => {
    if (req.user.id === req.pizza.created_by || User.isAdmin(req.user.roles)) {
        next()
    } else {
        res.status(401).json({ msg: "No autorizado" })
    }
};

//Middleware

const isExist = async(req, res, next) => {
    let pizza = await pizzas.findByPk(req.params.id);

    if (pizza) {
        req.pizza = pizza.dataValues
        return next()
    } else {
        return res.status(404).json({ status: 404, msg: "Pizza no encontrada" })
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