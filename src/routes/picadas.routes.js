const express = require('express')
const router = express.Router()
const { findAll, find, store, update, destroy, policy, isExist } = require('../controllers/picadas.controller');
const { isAuthenticated } = require('../controllers/index.controller');
const { validatepicadas } = require('../validators/picadas');

/**
 * @openapi
 * path:
 * /prefood/find/all:
 *  get:
 *    description: Trae todas las picadas
 *    summary: Trae todas las picadas
 *    tags:
 *      - prefood
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No hay picadas.
 */
router.get('/find/all', findAll);

/**
 * @openapi
 * path:
 * /prefood/find/{id}:
 *  get:
 *    description: Trae una picada especifica por ID
 *    summary: Trae una picada especifica por ID
 *    tags:
 *      - prefood
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No se encontro ninguna picada.
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int(11)
 *          description: ID de la picada
 */
router.get('/find/:id', isExist, find);

/**
 * @openapi
 * path:
 * /prefood:
 *   post:
 *      description: Crea una picada
 *      summary: Crea una picada
 *      tags:
 *        - prefood
 *      responses:
 *        200:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al crear la picada
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
router.post('/', isAuthenticated, validatepicadas, store);

/**
 * @openapi
 * path:
 * /prefood/{id}:
 *   put:
 *      description: Actualiza una picada por el id
 *      summary: Actualiza una picada por el id
 *      tags:
 *        - prefood
 *      responses:
 *        201:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al actualizar la picada
 *        401:
 *          description: El usuario no tiene los permisos necesarios
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int
 *          description: ID de la picada
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
router.put('/:id', isAuthenticated, isExist, validatepicadas, policy, update);

/** 
 * @openapi
 * path:
 * /prefood/{id}:
 *   delete:
 *     description: Elimina una picada
 *     summary: Elimina una picada
 *     tags:
 *       - prefood
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
 *          description: ID de la picada a eliminar
 */
router.delete('/:id', isAuthenticated, isExist, policy, destroy);

module.exports = router