const moment = require('moment');
const { Categoria, User } = require('../database/models/index')
const sequelize = require('sequelize');

//API

const findAll = async(req, res) => {
    let categories = await Categoria.findAll({ order: sequelize.literal('id ASC') });
    return res.json(categories)
};

const find = async(req, res) => {
    let categories = await Categoria.findByPk(req.params.id);

    if (categories) {
        return res.status(200).json(categories)
    } else {
        return res.status(404).json({ status: 404, msg: "Categoria no encontrada" })
    }
};

const store = async(req, res) => {
    const params = req.body
    let categories = await Categoria.create(params)
    if (categories) {
        return res.status(200).json({ status: 200, categories })
    } else {
        return res.status(500).json({ status: 500, msg: "No se pudo crear la categoria" })
    }

};

const update = async(req, res) => {
    const params = req.body

    let categories = await Categoria.findByPk(req.params.id);

    if (!categories) {
        return res.status(404).json({ status: 404, msg: "Categoria no encontrada" })
    } else {
        categories.title = params.title
        categories.save().then(categories => {
            res.status(201).json({ status: 201, categories })
        })
    }
};

const destroy = async(req, res) => {
    let categories = await Categoria.findByPk(req.params.id);

    if (!categories) {
        return res.status(404).json({ msg: "Categoria no encontrada" })
    } else {
        categories.destroy().then(categories => {
            res.status(200).json({ status: 200, categories })
        })
    }
};

//Policy
const policy = async(req, res, next) => {
    if (req.user.id === req.categories.created_by || User.isAdmin(req.user.roles)) {
        next()
    } else {
        res.status(401).json({ msg: "No autorizado" })
    }
};

//Middleware

const isExist = async(req, res, next) => {
    let categories = await Categoria.findByPk(req.params.id);

    if (categories) {
        req.categories = categories.dataValues
        return next()
    } else {
        return res.status(404).json({ status: 404, msg: "Categoria no encontrada" })
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