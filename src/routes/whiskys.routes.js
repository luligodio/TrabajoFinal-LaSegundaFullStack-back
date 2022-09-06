const express = require('express')
const router = express.Router()
const { findAll, find, store, update, destroy, policy, isExist } = require('../controllers/whiskys.controller');
const { isAuthenticated } = require('../controllers/index.controller');
const { validatewhiskys } = require('../validators/whiskys');

/**
 * @openapi
 * path:
 * /whisky/find/all:
 *  get:
 *    description: Trae todas las whiskys
 *    summary: Trae todas las whiskys
 *    tags:
 *      - whisky
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No hay whiskys.
 */
router.get('/find/all', findAll);

/**
 * @openapi
 * path:
 * /whisky/find/{id}:
 *  get:
 *    description: Trae una whisky especifica por ID
 *    summary: Trae una whisky especifica por ID
 *    tags:
 *      - whisky
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No se encontro ninguna whisky.
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int(11)
 *          description: ID de la whisky
 */
router.get('/find/:id', isExist, find);

/**
 * @openapi
 * path:
 * /whisky:
 *   post:
 *      description: Crea una whisky
 *      summary: Crea una whisky
 *      tags:
 *        - whisky
 *      responses:
 *        200:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al crear la whisky
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
router.post('/', isAuthenticated, validatewhiskys, store);

/**
 * @openapi
 * path:
 * /whisky/{id}:
 *   put:
 *      description: Actualiza una whisky por el id
 *      summary: Actualiza una whisky por el id
 *      tags:
 *        - whisky
 *      responses:
 *        201:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al actualizar la whisky
 *        401:
 *          description: El usuario no tiene los permisos necesarios
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int
 *          description: ID de la whisky
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
router.put('/:id', isAuthenticated, isExist, validatewhiskys, policy, update);

/** 
 * @openapi
 * path:
 * /whisky/{id}:
 *   delete:
 *     description: Elimina una whisky
 *     summary: Elimina una whisky
 *     tags:
 *       - whisky
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
 *          description: ID de la whisky a eliminar
 */
router.delete('/:id', isAuthenticated, isExist, policy, destroy);

module.exports = router