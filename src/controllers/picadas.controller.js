const moment = require('moment');
const { picadas, User } = require('../database/models/index')
const sequelize = require('sequelize');

//API

const findAll = async(req, res) => {
    let prefood = await picadas.findAll({ order: sequelize.literal('id ASC') });
    return res.json(prefood)
};

const find = async(req, res) => {
    let prefood = await picadas.findByPk(req.params.id);

    if (prefood) {
        return res.status(200).json(prefood)
    } else {
        return res.status(404).json({ status: 404, msg: "picada no encontrada" })
    }
};

const store = async(req, res) => {
    const params = req.body
    let prefood = await picadas.create(params)
    if (prefood) {
        return res.status(200).json({ status: 200, prefood })
    } else {
        return res.status(500).json({ status: 500, msg: "No se pudo crear la picada" })
    }

};

const update = async(req, res) => {
    const params = req.body

    let prefood = await picadas.findByPk(req.params.id);

    if (!prefood) {
        return res.status(404).json({ status: 404, msg: "picada no encontrada" })
    } else {
        prefood.title = params.title
        prefood.save().then(prefood => {
            res.status(201).json({ status: 201, prefood })
        })
    }
};

const destroy = async(req, res) => {
    let prefood = await picadas.findByPk(req.params.id);

    if (!prefood) {
        return res.status(404).json({ msg: "picada no encontrada" })
    } else {
        prefood.destroy().then(prefood => {
            res.status(200).json({ status: 200, prefood })
        })
    }
};

//Policy
const policy = async(req, res, next) => {
    if (req.user.id === req.prefood.created_by || User.isAdmin(req.user.roles)) {
        next()
    } else {
        res.status(401).json({ msg: "No autorizado" })
    }
};

//Middleware

const isExist = async(req, res, next) => {
    let prefood = await picadas.findByPk(req.params.id);

    if (prefood) {
        req.prefood = prefood.dataValues
        return next()
    } else {
        return res.status(404).json({ status: 404, msg: "picada no encontrada" })
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