const express = require('express')
const router = express.Router()
const { findAll, find, store, update, destroy, policy, isExist } = require('../controllers/mesas.controller');
const { isAuthenticated } = require('../controllers/index.controller');
const { validatemesas } = require('../validators/mesas');

/**
 * @openapi
 * path:
 * /table/find/all:
 *  get:
 *    description: Trae todas las mesas
 *    summary: Trae todas las mesas
 *    tags:
 *      - table
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No hay mesas.
 */
router.get('/find/all', findAll);

/**
 * @openapi
 * path:
 * /table/find/{id}:
 *  get:
 *    description: Trae una mesa especifica por ID
 *    summary: Trae una mesa especifica por ID
 *    tags:
 *      - table
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No se encontro ninguna mesa.
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int(11)
 *          description: ID de la mesa
 */
router.get('/find/:id', isExist, find);

/**
 * @openapi
 * path:
 * /table:
 *   post:
 *      description: Crea una mesa
 *      summary: Crea una mesa
 *      tags:
 *        - table
 *      responses:
 *        200:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al crear la mesa
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
router.post('/', isAuthenticated, validatemesas, store);

/**
 * @openapi
 * path:
 * /table/{id}:
 *   put:
 *      description: Actualiza una mesa por el id
 *      summary: Actualiza una mesa por el id
 *      tags:
 *        - table
 *      responses:
 *        201:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al actualizar la mesa
 *        401:
 *          description: El usuario no tiene los permisos necesarios
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int
 *          description: ID de la mesa
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
router.put('/:id', isAuthenticated, isExist, validatemesas, policy, update);

/** 
 * @openapi
 * path:
 * /table/{id}:
 *   delete:
 *     description: Elimina una mesa
 *     summary: Elimina una mesa
 *     tags:
 *       - table
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
 *          description: ID de la mesa a eliminar
 */
router.delete('/:id', isAuthenticated, isExist, policy, destroy);

module.exports = router