const express = require('express')
const router = express.Router()
const { findAll, find, store, update, destroy, policy, isExist } = require('../controllers/postres.controller');
const { isAuthenticated } = require('../controllers/index.controller');
const { validatepostres } = require('../validators/postres');

/**
 * @openapi
 * path:
 * /dessert/find/all:
 *  get:
 *    description: Trae todas las postres
 *    summary: Trae todas las postres
 *    tags:
 *      - dessert
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No hay postres.
 */
router.get('/find/all', findAll);

/**
 * @openapi
 * path:
 * /dessert/find/{id}:
 *  get:
 *    description: Trae una postre especifica por ID
 *    summary: Trae una postre especifica por ID
 *    tags:
 *      - dessert
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No se encontro ninguna postre.
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int(11)
 *          description: ID de la postre
 */
router.get('/find/:id', isExist, find);

/**
 * @openapi
 * path:
 * /dessert:
 *   post:
 *      description: Crea una postre
 *      summary: Crea una postre
 *      tags:
 *        - dessert
 *      responses:
 *        200:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al crear la postre
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
router.post('/', isAuthenticated, validatepostres, store);

/**
 * @openapi
 * path:
 * /dessert/{id}:
 *   put:
 *      description: Actualiza una postre por el id
 *      summary: Actualiza una postre por el id
 *      tags:
 *        - dessert
 *      responses:
 *        201:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al actualizar la postre
 *        401:
 *          description: El usuario no tiene los permisos necesarios
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int
 *          description: ID de la postre
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
router.put('/:id', isAuthenticated, isExist, validatepostres, policy, update);

/** 
 * @openapi
 * path:
 * /dessert/{id}:
 *   delete:
 *     description: Elimina una postre
 *     summary: Elimina una postre
 *     tags:
 *       - dessert
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
 *          description: ID de la postre a eliminar
 */
router.delete('/:id', isAuthenticated, isExist, policy, destroy);

module.exports = router