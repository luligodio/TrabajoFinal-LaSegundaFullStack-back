const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const validateNews = [
    
    check('title')
        .exists()
        .isLength({min:3})
        .withMessage('El titulo debe contener mas de 3 caracteres'),
    check('content')
        .exists()
        .isLength({min:3})
        .withMessage('El contenido de la noticia debe contener mas de 3 caracteres'),
    check('category_id')
        .exists()
        .isNumeric()
        .withMessage('La categoria no puede estar vacia'),
    check('link'),
    check('isNotificable')
        .exists()
        .isBoolean()
        .withMessage('Si es notificable debe enviar un valor booleano'),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateNews }