const express = require('express')
const router = express.Router()
const { findAll, find, store, update, destroy, policy, isExist } = require('../controllers/header.controller');
const { isAuthenticated } = require('../controllers/index.controller');
const { validateHeader } = require('../validators/Header');

/**
 * @openapi
 * path:
 * /headers/find/all:
 *  get:
 *    description: Trae todos los Headers
 *    summary: Trae todos los Headers
 *    tags:
 *      - headers
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No hay Headers.
 */
router.get('/find/all', findAll);

/**
 * @openapi
 * path:
 * /headers/find/{id}:
 *  get:
 *    description: Trae un header especifica por ID
 *    summary: Trae un header especifica por ID
 *    tags:
 *      - headers
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No se encontro ningun header.
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int(11)
 *          description: ID de la header
 */
router.get('/find/:id', isExist, find);

/**
 * @openapi
 * path:
 * /headers:
 *   post:
 *      description: Crea un header
 *      summary: Crea un header
 *      tags:
 *        - headers
 *      responses:
 *        200:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al crear la header
 *        401:
 *          description: El usuario no tiene los permisos necesarios
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  format: varchar(50)
 *                  example: ejemplo
 *                created_by:
 *                  type: integer
 *                  format: int(11)
 *                  example: 1
 */
router.post('/', isAuthenticated, validateHeader, store);

/**
 * @openapi
 * path:
 * /headers/{id}:
 *   put:
 *      description: Actualiza un header por el id
 *      summary: Actualiza un header por el id
 *      tags:
 *        - headers
 *      responses:
 *        201:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al actualizar la header
 *        401:
 *          description: El usuario no tiene los permisos necesarios
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int
 *          description: ID de la header
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  format: varchar(50)
 *                  example: ejemplo
 *                created_by:
 *                  type: integer
 *                  format: int(100)
 *                  example: 1
 */
router.put('/:id', isAuthenticated, isExist, validateHeader, policy, update);

/** 
 * @openapi
 * path:
 * /headers/{id}:
 *   delete:
 *     description: Elimina un header
 *     summary: Elimina un header
 *     tags:
 *       - headers
 *     responses:
 *       200:
 *         description: Regresa el token en el header
 *       400:
 *         description: ID invalido
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int(11)
 *          description: ID de la header a eliminar
 */
router.delete('/:id', isAuthenticated, isExist, policy, destroy);

module.exports = router