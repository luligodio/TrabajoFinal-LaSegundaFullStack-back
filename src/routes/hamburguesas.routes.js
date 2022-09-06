const express = require('express')
const router = express.Router()
const { findAll, find, store, update, destroy, policy, isExist } = require('../controllers/hamburguesa.controller');
const { isAuthenticated } = require('../controllers/index.controller');
const { validatehamburguesas } = require('../validators/hamburguesas');

/**
 * @openapi
 * path:
 * /burger/find/all:
 *  get:
 *    description: Trae todas las Hamburguesas
 *    summary: Trae todas las Hamburguesas
 *    tags:
 *      - burger
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No hay Hamburguesas.
 */
router.get('/find/all', findAll);

/**
 * @openapi
 * path:
 * /burger/find/{id}:
 *  get:
 *    description: Trae una Hamburguesa especifica por ID
 *    summary: Trae una Hamburguesa especifica por ID
 *    tags:
 *      - burger
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No se encontro ninguna Hamburguesa.
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int(11)
 *          description: ID de la Hamburguesa
 */
router.get('/find/:id', isExist, find);

/**
 * @openapi
 * path:
 * /burger:
 *   post:
 *      description: Crea una Hamburguesa
 *      summary: Crea una Hamburguesa
 *      tags:
 *        - burger
 *      responses:
 *        200:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al crear la Hamburguesa
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
router.post('/', isAuthenticated, validatehamburguesas, store);

/**
 * @openapi
 * path:
 * /burger/{id}:
 *   put:
 *      description: Actualiza una Hamburguesa por el id
 *      summary: Actualiza una Hamburguesa por el id
 *      tags:
 *        - burger
 *      responses:
 *        201:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al actualizar la Hamburguesa
 *        401:
 *          description: El usuario no tiene los permisos necesarios
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int
 *          description: ID de la Hamburguesa
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
router.put('/:id', isAuthenticated, isExist, validatehamburguesas, policy, update);

/** 
 * @openapi
 * path:
 * /burger/{id}:
 *   delete:
 *     description: Elimina una Hamburguesa
 *     summary: Elimina una Hamburguesa
 *     tags:
 *       - burger
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
 *          description: ID de la Hamburguesa a eliminar
 */
router.delete('/:id', isAuthenticated, isExist, policy, destroy);

module.exports = router