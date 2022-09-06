const moment = require('moment');
const { postres, User } = require('../database/models/index')
const sequelize = require('sequelize');

//API

const findAll = async(req, res) => {
    let dessert = await postres.findAll({ order: sequelize.literal('id ASC') });
    return res.json(dessert)
};

const find = async(req, res) => {
    let dessert = await postres.findByPk(req.params.id);

    if (dessert) {
        return res.status(200).json(dessert)
    } else {
        return res.status(404).json({ status: 404, msg: "Postre no encontrada" })
    }
};

const store = async(req, res) => {
    const params = req.body
    let dessert = await postres.create(params)
    if (dessert) {
        return res.status(200).json({ status: 200, dessert })
    } else {
        return res.status(500).json({ status: 500, msg: "No se pudo crear la Postre" })
    }

};

const update = async(req, res) => {
    const params = req.body

    let dessert = await postres.findByPk(req.params.id);

    if (!dessert) {
        return res.status(404).json({ status: 404, msg: "Postre no encontrada" })
    } else {
        dessert.title = params.title
        dessert.save().then(dessert => {
            res.status(201).json({ status: 201, dessert })
        })
    }
};

const destroy = async(req, res) => {
    let dessert = await postres.findByPk(req.params.id);

    if (!dessert) {
        return res.status(404).json({ msg: "Postre no encontrada" })
    } else {
        dessert.destroy().then(dessert => {
            res.status(200).json({ status: 200, dessert })
        })
    }
};

//Policy
const policy = async(req, res, next) => {
    if (req.user.id === req.dessert.created_by || User.isAdmin(req.user.roles)) {
        next()
    } else {
        res.status(401).json({ msg: "No autorizado" })
    }
};

//Middleware

const isExist = async(req, res, next) => {
    let dessert = await postres.findByPk(req.params.id);

    if (dessert) {
        req.dessert = dessert.dataValues
        return next()
    } else {
        return res.status(404).json({ status: 404, msg: "Postre no encontrada" })
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