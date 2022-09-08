const moment = require('moment');
const { Mesa, User } = require('../database/models/index')
const sequelize = require('sequelize');

//API

const findAll = async(req, res) => {
    let table = await mesa.findAll({ order: sequelize.literal('id ASC') });
    return res.json(table)
};

const find = async(req, res) => {
    let table = await mesa.findByPk(req.params.id);

    if (table) {
        return res.status(200).json(table)
    } else {
        return res.status(404).json({ status: 404, msg: "Mesa no encontrada" })
    }
};

const store = async(req, res) => {
    const params = req.body
    let table = await mesa.create(params)
    if (table) {
        return res.status(200).json({ status: 200, table })
    } else {
        return res.status(500).json({ status: 500, msg: "No se pudo crear la Mesa" })
    }

};

const update = async(req, res) => {
    const params = req.body

    let table = await mesa.findByPk(req.params.id);

    if (!table) {
        return res.status(404).json({ status: 404, msg: "Mesa no encontrada" })
    } else {
        table.title = params.title
        table.save().then(table => {
            res.status(201).json({ status: 201, table })
        })
    }
};

const destroy = async(req, res) => {
    let table = await mesa.findByPk(req.params.id);

    if (!table) {
        return res.status(404).json({ msg: "Mesa no encontrada" })
    } else {
        table.destroy().then(table => {
            res.status(200).json({ status: 200, table })
        })
    }
};

//Policy
const policy = async(req, res, next) => {
    if (req.user.id === req.table.created_by || User.isAdmin(req.user.roles)) {
        next()
    } else {
        res.status(401).json({ msg: "No autorizado" })
    }
};

//Middleware

const isExist = async(req, res, next) => {
    let table = await mesa.findByPk(req.params.id);

    if (table) {
        req.table = table.dataValues
        return next()
    } else {
        return res.status(404).json({ status: 404, msg: "Mesa no encontrada" })
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