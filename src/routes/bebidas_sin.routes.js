const express = require('express')
const router = express.Router()
const { findAll, find, store, update, destroy, policy, isExist } = require('../controllers/bebidas_sin.controller');
const { isAuthenticated } = require('../controllers/index.controller');
const { validatebebidas_sin } = require('../validators/bebidas_sins');

/**
 * @openapi
 * path:
 * /drinks_wa/find/all:
 *  get:
 *    description: Trae todas las bebidas sin alcohol
 *    summary: Trae todas las bebidas sin alcohol
 *    tags:
 *      - drinks_wa
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No hay bebidas sin alcohol.
 */
router.get('/find/all', findAll);

/**
 * @openapi
 * path:
 * /drinks_wa/find/{id}:
 *  get:
 *    description: Trae una bebida sin alcohol especifica por ID
 *    summary: Trae una bebida sin alcohol especifica por ID
 *    tags:
 *      - drinks_wa
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No se encontro ninguna bebida sin alcohol.
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int(11)
 *          description: ID de la bebida sin alcohol
 */
router.get('/find/:id', isExist, find);

/**
 * @openapi
 * path:
 * /drinks_wa:
 *   post:
 *      description: Crea una bebida sin alcohol
 *      summary: Crea una bebida sin alcohol
 *      tags:
 *        - drinks_wa
 *      responses:
 *        200:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al crear la bebida sin alcohol
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
router.post('/', isAuthenticated, validatebebidas_sin, store);

/**
 * @openapi
 * path:
 * /drinks_wa/{id}:
 *   put:
 *      description: Actualiza una bebida sin alcohol por el id
 *      summary: Actualiza una bebida sin alcohol por el id
 *      tags:
 *        - drinks_wa
 *      responses:
 *        201:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al actualizar la bebida sin alcohol
 *        401:
 *          description: El usuario no tiene los permisos necesarios
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int
 *          description: ID de la bebida sin alcohol
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
router.put('/:id', isAuthenticated, isExist, validatebebidas_sin, policy, update);

/** 
 * @openapi
 * path:
 * /drinks_wa/{id}:
 *   delete:
 *     description: Elimina una bebida sin alcohol
 *     summary: Elimina una bebida sin alcohol
 *     tags:
 *       - drinks_wa
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
 *          description: ID de la bebida sin alcohol a eliminar
 */
router.delete('/:id', isAuthenticated, isExist, policy, destroy);

module.exports = router