const moment = require('moment');
const { bebidas_sin, User } = require('../database/models/index')
const sequelize = require('sequelize');

//API

const findAll = async(req, res) => {
    let drinks_wa = await bebidas_sin.findAll({ order: sequelize.literal('id ASC') });
    return res.json(drinks_wa)
};

const find = async(req, res) => {
    let drinks_wa = await bebidas_sin.findByPk(req.params.id);

    if (drinks_wa) {
        return res.status(200).json(drinks_wa)
    } else {
        return res.status(404).json({ status: 404, msg: "Bebida sin alcohol no encontrada" })
    }
};

const store = async(req, res) => {
    const params = req.body
    let drinks_wa = await bebidas_sin.create(params)
    if (drinks_wa) {
        return res.status(200).json({ status: 200, drinks_wa })
    } else {
        return res.status(500).json({ status: 500, msg: "No se pudo crear la Bebida sin alcohol" })
    }

};

const update = async(req, res) => {
    const params = req.body

    let drinks_wa = await bebidas_sin.findByPk(req.params.id);

    if (!drinks_wa) {
        return res.status(404).json({ status: 404, msg: "Bebida sin alcohol no encontrada" })
    } else {
        drinks_wa.title = params.title
        drinks_wa.save().then(drinks_wa => {
            res.status(201).json({ status: 201, drinks_wa })
        })
    }
};

const destroy = async(req, res) => {
    let drinks_wa = await bebidas_sin.findByPk(req.params.id);

    if (!drinks_wa) {
        return res.status(404).json({ msg: "Bebida sin alcohol no encontrada" })
    } else {
        drinks_wa.destroy().then(drinks_wa => {
            res.status(200).json({ status: 200, drinks_wa })
        })
    }
};

//Policy
const policy = async(req, res, next) => {
    if (req.user.id === req.drinks_wa.created_by || User.isAdmin(req.user.roles)) {
        next()
    } else {
        res.status(401).json({ msg: "No autorizado" })
    }
};

//Middleware

const isExist = async(req, res, next) => {
    let drinks_wa = await bebidas_sin.findByPk(req.params.id);

    if (drinks_wa) {
        req.drinks_wa = drinks_wa.dataValues
        return next()
    } else {
        return res.status(404).json({ status: 404, msg: "Bebida sin alcohol no encontrada" })
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