const moment = require('moment');
const { tragos, User } = require('../database/models/index')
const sequelize = require('sequelize');

//API

const findAll = async(req, res) => {
    let drinks = await tragos.findAll({ order: sequelize.literal('id ASC') });
    return res.json(drinks)
};

const find = async(req, res) => {
    let drinks = await tragos.findByPk(req.params.id);

    if (drinks) {
        return res.status(200).json(drinks)
    } else {
        return res.status(404).json({ status: 404, msg: "Trago no encontrada" })
    }
};

const store = async(req, res) => {
    const params = req.body
    let drinks = await tragos.create(params)
    if (drinks) {
        return res.status(200).json({ status: 200, drinks })
    } else {
        return res.status(500).json({ status: 500, msg: "No se pudo crear la Trago" })
    }

};

const update = async(req, res) => {
    const params = req.body

    let drinks = await tragos.findByPk(req.params.id);

    if (!drinks) {
        return res.status(404).json({ status: 404, msg: "Trago no encontrada" })
    } else {
        drinks.title = params.title
        drinks.save().then(drinks => {
            res.status(201).json({ status: 201, drinks })
        })
    }
};

const destroy = async(req, res) => {
    let drinks = await tragos.findByPk(req.params.id);

    if (!drinks) {
        return res.status(404).json({ msg: "Trago no encontrada" })
    } else {
        drinks.destroy().then(drinks => {
            res.status(200).json({ status: 200, drinks })
        })
    }
};

//Policy
const policy = async(req, res, next) => {
    if (req.user.id === req.drinks.created_by || User.isAdmin(req.user.roles)) {
        next()
    } else {
        res.status(401).json({ msg: "No autorizado" })
    }
};

//Middleware

const isExist = async(req, res, next) => {
    let drinks = await tragos.findByPk(req.params.id);

    if (drinks) {
        req.drinks = drinks.dataValues
        return next()
    } else {
        return res.status(404).json({ status: 404, msg: "Trago no encontrada" })
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