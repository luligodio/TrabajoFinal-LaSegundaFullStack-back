const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const validateCarrito = [

    check('name')
    .exists()
    .isLength({ min: 3 })
    .withMessage('El titulo debe contener mas de 3 caracteres'),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCarrito }