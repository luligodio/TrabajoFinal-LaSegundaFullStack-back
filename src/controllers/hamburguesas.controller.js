const moment = require('moment');
const { hamburguesas, User } = require('../database/models/index')
const sequelize = require('sequelize');

//API

const findAll = async(req, res) => {
    let burger = await hamburguesas.findAll({ order: sequelize.literal('id ASC') });
    return res.json(burger)
};

const find = async(req, res) => {
    let burger = await hamburguesas.findByPk(req.params.id);

    if (burger) {
        return res.status(200).json(burger)
    } else {
        return res.status(404).json({ status: 404, msg: "Hamburguesa no encontrada" })
    }
};

const store = async(req, res) => {
    const params = req.body
    let burger = await hamburguesas.create(params)
    if (burger) {
        return res.status(200).json({ status: 200, burger })
    } else {
        return res.status(500).json({ status: 500, msg: "No se pudo crear la Hamburguesa" })
    }

};

const update = async(req, res) => {
    const params = req.body

    let burger = await hamburguesas.findByPk(req.params.id);

    if (!burger) {
        return res.status(404).json({ status: 404, msg: "Hamburguesa no encontrada" })
    } else {
        burger.title = params.title
        burger.save().then(burger => {
            res.status(201).json({ status: 201, burger })
        })
    }
};

const destroy = async(req, res) => {
    let burger = await hamburguesas.findByPk(req.params.id);

    if (!burger) {
        return res.status(404).json({ msg: "Hamburguesa no encontrada" })
    } else {
        burger.destroy().then(burger => {
            res.status(200).json({ status: 200, burger })
        })
    }
};

//Policy
const policy = async(req, res, next) => {
    if (req.user.id === req.burger.created_by || User.isAdmin(req.user.roles)) {
        next()
    } else {
        res.status(401).json({ msg: "No autorizado" })
    }
};

//Middleware

const isExist = async(req, res, next) => {
    let burger = await hamburguesas.findByPk(req.params.id);

    if (burger) {
        req.burger = burger.dataValues
        return next()
    } else {
        return res.status(404).json({ status: 404, msg: "Hamburguesa no encontrada" })
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