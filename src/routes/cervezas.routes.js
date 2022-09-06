const express = require('express')
const router = express.Router()
const { findAll, find, store, update, destroy, policy, isExist } = require('../controllers/cervezas.controller');
const { isAuthenticated } = require('../controllers/index.controller');
const { validatecervezas } = require('../validators/cervezas');

/**
 * @openapi
 * path:
 * /beer/find/all:
 *  get:
 *    description: Trae todas las cervezas
 *    summary: Trae todas las cervezas
 *    tags:
 *      - beer
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No hay cervezas.
 */
router.get('/find/all', findAll);

/**
 * @openapi
 * path:
 * /beer/find/{id}:
 *  get:
 *    description: Trae una cerveza especifica por ID
 *    summary: Trae una cerveza especifica por ID
 *    tags:
 *      - beer
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No se encontro ninguna cerveza.
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int(11)
 *          description: ID de la cerveza
 */
router.get('/find/:id', isExist, find);

/**
 * @openapi
 * path:
 * /beer:
 *   post:
 *      description: Crea una cerveza
 *      summary: Crea una cerveza
 *      tags:
 *        - beer
 *      responses:
 *        200:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al crear la cerveza
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
router.post('/', isAuthenticated, validatecervezas, store);

/**
 * @openapi
 * path:
 * /beer/{id}:
 *   put:
 *      description: Actualiza una cerveza por el id
 *      summary: Actualiza una cerveza por el id
 *      tags:
 *        - beer
 *      responses:
 *        201:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al actualizar la cerveza
 *        401:
 *          description: El usuario no tiene los permisos necesarios
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int
 *          description: ID de la cerveza
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
router.put('/:id', isAuthenticated, isExist, validatecervezas, policy, update);

/** 
 * @openapi
 * path:
 * /beer/{id}:
 *   delete:
 *     description: Elimina una cerveza
 *     summary: Elimina una cerveza
 *     tags:
 *       - beer
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
 *          description: ID de la cerveza a eliminar
 */
router.delete('/:id', isAuthenticated, isExist, policy, destroy);

module.exports = router