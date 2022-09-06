const express = require('express')
const router = express.Router()
const { findAll, find, store, update, destroy, policy, isExist } = require('../controllers/tragos.controller');
const { isAuthenticated } = require('../controllers/index.controller');
const { validatetragos } = require('../validators/tragos');

/**
 * @openapi
 * path:
 * /drinks/find/all:
 *  get:
 *    description: Trae todas las tragos
 *    summary: Trae todas las tragos
 *    tags:
 *      - drinks
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No hay tragos.
 */
router.get('/find/all', findAll);

/**
 * @openapi
 * path:
 * /drinks/find/{id}:
 *  get:
 *    description: Trae una trago especifica por ID
 *    summary: Trae una trago especifica por ID
 *    tags:
 *      - drinks
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No se encontro ninguna trago.
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int(11)
 *          description: ID de la trago
 */
router.get('/find/:id', isExist, find);

/**
 * @openapi
 * path:
 * /drinks:
 *   post:
 *      description: Crea una trago
 *      summary: Crea una trago
 *      tags:
 *        - drinks
 *      responses:
 *        200:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al crear la trago
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
router.post('/', isAuthenticated, validatetragos, store);

/**
 * @openapi
 * path:
 * /drinks/{id}:
 *   put:
 *      description: Actualiza una trago por el id
 *      summary: Actualiza una trago por el id
 *      tags:
 *        - drinks
 *      responses:
 *        201:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al actualizar la trago
 *        401:
 *          description: El usuario no tiene los permisos necesarios
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int
 *          description: ID de la trago
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
router.put('/:id', isAuthenticated, isExist, validatetragos, policy, update);

/** 
 * @openapi
 * path:
 * /drinks/{id}:
 *   delete:
 *     description: Elimina una trago
 *     summary: Elimina una trago
 *     tags:
 *       - drinks
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
 *          description: ID de la trago a eliminar
 */
router.delete('/:id', isAuthenticated, isExist, policy, destroy);

module.exports = router