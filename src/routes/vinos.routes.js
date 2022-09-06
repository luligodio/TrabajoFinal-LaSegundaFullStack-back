const express = require('express')
const router = express.Router()
const { findAll, find, store, update, destroy, policy, isExist } = require('../controllers/vinos.controller');
const { isAuthenticated } = require('../controllers/index.controller');
const { validatevinos } = require('../validators/vinos');

/**
 * @openapi
 * path:
 * /wine/find/all:
 *  get:
 *    description: Trae todas las vinos
 *    summary: Trae todas las vinos
 *    tags:
 *      - wine
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No hay vinos.
 */
router.get('/find/all', findAll);

/**
 * @openapi
 * path:
 * /wine/find/{id}:
 *  get:
 *    description: Trae una vino especifica por ID
 *    summary: Trae una vino especifica por ID
 *    tags:
 *      - wine
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No se encontro ninguna vino.
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int(11)
 *          description: ID de la vino
 */
router.get('/find/:id', isExist, find);

/**
 * @openapi
 * path:
 * /wine:
 *   post:
 *      description: Crea una vino
 *      summary: Crea una vino
 *      tags:
 *        - wine
 *      responses:
 *        200:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al crear la vino
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
router.post('/', isAuthenticated, validatevinos, store);

/**
 * @openapi
 * path:
 * /wine/{id}:
 *   put:
 *      description: Actualiza una vino por el id
 *      summary: Actualiza una vino por el id
 *      tags:
 *        - wine
 *      responses:
 *        201:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al actualizar la vino
 *        401:
 *          description: El usuario no tiene los permisos necesarios
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int
 *          description: ID de la vino
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
router.put('/:id', isAuthenticated, isExist, validatevinos, policy, update);

/** 
 * @openapi
 * path:
 * /wine/{id}:
 *   delete:
 *     description: Elimina una vino
 *     summary: Elimina una vino
 *     tags:
 *       - wine
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
 *          description: ID de la vino a eliminar
 */
router.delete('/:id', isAuthenticated, isExist, policy, destroy);

module.exports = router