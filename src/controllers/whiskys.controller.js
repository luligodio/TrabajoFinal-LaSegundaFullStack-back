const moment = require('moment');
const { whiskys, User } = require('../database/models/index')
const sequelize = require('sequelize');

//API

const findAll = async(req, res) => {
    let whisky = await whiskys.findAll({ order: sequelize.literal('id ASC') });
    return res.json(whisky)
};

const find = async(req, res) => {
    let whisky = await whiskys.findByPk(req.params.id);

    if (whisky) {
        return res.status(200).json(whisky)
    } else {
        return res.status(404).json({ status: 404, msg: "Whisky no encontrada" })
    }
};

const store = async(req, res) => {
    const params = req.body
    let whisky = await whiskys.create(params)
    if (whisky) {
        return res.status(200).json({ status: 200, whisky })
    } else {
        return res.status(500).json({ status: 500, msg: "No se pudo crear la Whisky" })
    }

};

const update = async(req, res) => {
    const params = req.body

    let whisky = await whiskys.findByPk(req.params.id);

    if (!whisky) {
        return res.status(404).json({ status: 404, msg: "Whisky no encontrada" })
    } else {
        whisky.title = params.title
        whisky.save().then(whisky => {
            res.status(201).json({ status: 201, whisky })
        })
    }
};

const destroy = async(req, res) => {
    let whisky = await whiskys.findByPk(req.params.id);

    if (!whisky) {
        return res.status(404).json({ msg: "Whisky no encontrada" })
    } else {
        whisky.destroy().then(whisky => {
            res.status(200).json({ status: 200, whisky })
        })
    }
};

//Policy
const policy = async(req, res, next) => {
    if (req.user.id === req.whisky.created_by || User.isAdmin(req.user.roles)) {
        next()
    } else {
        res.status(401).json({ msg: "No autorizado" })
    }
};

//Middleware

const isExist = async(req, res, next) => {
    let whisky = await whiskys.findByPk(req.params.id);

    if (whisky) {
        req.whisky = whisky.dataValues
        return next()
    } else {
        return res.status(404).json({ status: 404, msg: "Whisky no encontrada" })
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