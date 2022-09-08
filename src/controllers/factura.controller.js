const moment = require('moment');
const { Factura, User } = require('../database/models/index')
const sequelize = require('sequelize');

//API

const findAll = async(req, res) => {
    let Facturas = await Factura.findAll({ order: sequelize.literal('id ASC') });
    return res.json(Facturas)
};

const find = async(req, res) => {
    let Facturas = await Factura.findByPk(req.params.id);

    if (Facturas) {
        return res.status(200).json(Facturas)
    } else {
        return res.status(404).json({ status: 404, msg: "Factura no encontrada" })
    }
};

const store = async(req, res) => {
    const params = req.body
    let Facturas = await Factura.create(params)
    if (Facturas) {
        return res.status(200).json({ status: 200, Facturas })
    } else {
        return res.status(500).json({ status: 500, msg: "No se pudo crear la Factura" })
    }

};

const update = async(req, res) => {
    const params = req.body

    let Facturas = await Factura.findByPk(req.params.id);

    if (!Facturas) {
        return res.status(404).json({ status: 404, msg: "Factura no encontrada" })
    } else {
        Facturas.title = params.title
        Facturas.save().then(Facturas => {
            res.status(201).json({ status: 201, Facturas })
        })
    }
};

const destroy = async(req, res) => {
    let Facturas = await Factura.findByPk(req.params.id);

    if (!Facturas) {
        return res.status(404).json({ msg: "Factura no encontrada" })
    } else {
        Facturas.destroy().then(Facturas => {
            res.status(200).json({ status: 200, Facturas })
        })
    }
};

//Policy
const policy = async(req, res, next) => {
    if (req.user.id === req.Facturas.created_by || User.isAdmin(req.user.roles)) {
        next()
    } else {
        res.status(401).json({ msg: "No autorizado" })
    }
};

//Middleware

const isExist = async(req, res, next) => {
    let Facturas = await Factura.findByPk(req.params.id);

    if (Facturas) {
        req.Facturas = Facturas.dataValues
        return next()
    } else {
        return res.status(404).json({ status: 404, msg: "Factura no encontrada" })
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