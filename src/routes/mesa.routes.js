const express = require('express')
const router = express.Router()
const { findAll, find, store, update, destroy, policy, isExist } = require('../controllers/mesa.controller');
const { isAuthenticated } = require('../controllers/index.controller');
const { validateMesa } = require('../validators/Mesa');

/**
 * @openapi
 * path:
 * /Mesa/find/all:
 *  get:
 *    description: Trae todas las mesas
 *    summary: Trae todas las mesas
 *    tags:
 *      - Mesa
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No hay mesas.
 */
router.get('/', findAll);

/**
 * @openapi
 * path:
 * /Mesa/find/{id}:
 *  get:
 *    description: Trae una mesa especifica por ID
 *    summary: Trae una mesa especifica por ID
 *    tags:
 *      - Mesa
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
router.get('/:id', isExist, find);

/**
 * @openapi
 * path:
 * /Mesa:
 *   post:
 *      description: Crea una mesa
 *      summary: Crea una mesa
 *      tags:
 *        - Mesa
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
router.post('/', validateMesa, store);

/**
 * @openapi
 * path:
 * /Mesa/{id}:
 *   put:
 *      description: Actualiza una mesa por el id
 *      summary: Actualiza una mesa por el id
 *      tags:
 *        - Mesa
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
router.put('/:id', isExist, validateMesa, policy, update);

/** 
 * @openapi
 * path:
 * /Mesa/{id}:
 *   delete:
 *     description: Elimina una mesa
 *     summary: Elimina una mesa
 *     tags:
 *       - Mesa
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
router.delete('/:id', isExist, policy, destroy);

module.exports = router