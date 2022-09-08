const moment = require('moment');
const { Header, User } = require('../database/models/index')
const sequelize = require('sequelize');

//API

const findAll = async(req, res) => {
    let Headers = await Header.findAll({ order: sequelize.literal('id ASC') });
    return res.json(Headers)
};

const find = async(req, res) => {
    let Headers = await Header.findByPk(req.params.id);

    if (Headers) {
        return res.status(200).json(Headers)
    } else {
        return res.status(404).json({ status: 404, msg: "Encabezado no encontrada" })
    }
};

const store = async(req, res) => {
    const params = req.body
    let Headers = await Header.create(params)
    if (Headers) {
        return res.status(200).json({ status: 200, Headers })
    } else {
        return res.status(500).json({ status: 500, msg: "No se pudo crear la Encabezado" })
    }

};

const update = async(req, res) => {
    const params = req.body

    let Headers = await Header.findByPk(req.params.id);

    if (!Headers) {
        return res.status(404).json({ status: 404, msg: "Encabezado no encontrada" })
    } else {
        Headers.title = params.title
        Headers.save().then(Headers => {
            res.status(201).json({ status: 201, Headers })
        })
    }
};

const destroy = async(req, res) => {
    let Headers = await Header.findByPk(req.params.id);

    if (!Headers) {
        return res.status(404).json({ msg: "Encabezado no encontrada" })
    } else {
        Headers.destroy().then(Headers => {
            res.status(200).json({ status: 200, Headers })
        })
    }
};

//Policy
const policy = async(req, res, next) => {
    if (req.user.id === req.Headers.created_by || User.isAdmin(req.user.roles)) {
        next()
    } else {
        res.status(401).json({ msg: "No autorizado" })
    }
};

//Middleware

const isExist = async(req, res, next) => {
    let Headers = await Header.findByPk(req.params.id);

    if (Headers) {
        req.Headers = Headers.dataValues
        return next()
    } else {
        return res.status(404).json({ status: 404, msg: "Encabezado no encontrada" })
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