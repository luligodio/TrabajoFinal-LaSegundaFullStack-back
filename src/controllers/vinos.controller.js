const moment = require('moment');
const { vinos, User } = require('../database/models/index')
const sequelize = require('sequelize');

//API

const findAll = async(req, res) => {
    let wine = await vinos.findAll({ order: sequelize.literal('id ASC') });
    return res.json(wine)
};

const find = async(req, res) => {
    let wine = await vinos.findByPk(req.params.id);

    if (wine) {
        return res.status(200).json(wine)
    } else {
        return res.status(404).json({ status: 404, msg: "vino no encontrada" })
    }
};

const store = async(req, res) => {
    const params = req.body
    let wine = await vinos.create(params)
    if (wine) {
        return res.status(200).json({ status: 200, wine })
    } else {
        return res.status(500).json({ status: 500, msg: "No se pudo crear la vino" })
    }

};

const update = async(req, res) => {
    const params = req.body

    let wine = await vinos.findByPk(req.params.id);

    if (!wine) {
        return res.status(404).json({ status: 404, msg: "vino no encontrada" })
    } else {
        wine.title = params.title
        wine.save().then(wine => {
            res.status(201).json({ status: 201, wine })
        })
    }
};

const destroy = async(req, res) => {
    let wine = await vinos.findByPk(req.params.id);

    if (!wine) {
        return res.status(404).json({ msg: "vino no encontrada" })
    } else {
        wine.destroy().then(wine => {
            res.status(200).json({ status: 200, wine })
        })
    }
};

//Policy
const policy = async(req, res, next) => {
    if (req.user.id === req.wine.created_by || User.isAdmin(req.user.roles)) {
        next()
    } else {
        res.status(401).json({ msg: "No autorizado" })
    }
};

//Middleware

const isExist = async(req, res, next) => {
    let wine = await vinos.findByPk(req.params.id);

    if (wine) {
        req.wine = wine.dataValues
        return next()
    } else {
        return res.status(404).json({ status: 404, msg: "vino no encontrada" })
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