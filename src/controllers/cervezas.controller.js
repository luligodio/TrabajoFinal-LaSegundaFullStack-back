const moment = require('moment');
const { cervezas, User } = require('../database/models/index')
const sequelize = require('sequelize');

//API

const findAll = async(req, res) => {
    let beer = await cervezas.findAll({ order: sequelize.literal('id ASC') });
    return res.json(beer)
};

const find = async(req, res) => {
    let beer = await cervezas.findByPk(req.params.id);

    if (beer) {
        return res.status(200).json(beer)
    } else {
        return res.status(404).json({ status: 404, msg: "Cerveza no encontrada" })
    }
};

const store = async(req, res) => {
    const params = req.body
    let beer = await cervezas.create(params)
    if (beer) {
        return res.status(200).json({ status: 200, beer })
    } else {
        return res.status(500).json({ status: 500, msg: "No se pudo crear la Cerveza" })
    }

};

const update = async(req, res) => {
    const params = req.body

    let beer = await cervezas.findByPk(req.params.id);

    if (!beer) {
        return res.status(404).json({ status: 404, msg: "Cerveza no encontrada" })
    } else {
        beer.title = params.title
        beer.save().then(beer => {
            res.status(201).json({ status: 201, beer })
        })
    }
};

const destroy = async(req, res) => {
    let beer = await cervezas.findByPk(req.params.id);

    if (!beer) {
        return res.status(404).json({ msg: "Cerveza no encontrada" })
    } else {
        beer.destroy().then(beer => {
            res.status(200).json({ status: 200, beer })
        })
    }
};

//Policy
const policy = async(req, res, next) => {
    if (req.user.id === req.beer.created_by || User.isAdmin(req.user.roles)) {
        next()
    } else {
        res.status(401).json({ msg: "No autorizado" })
    }
};

//Middleware

const isExist = async(req, res, next) => {
    let beer = await cervezas.findByPk(req.params.id);

    if (beer) {
        req.beer = beer.dataValues
        return next()
    } else {
        return res.status(404).json({ status: 404, msg: "cerveza no encontrada" })
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