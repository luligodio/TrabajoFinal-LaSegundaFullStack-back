const express = require('express')
const router = express.Router()
const { findAll, find, store, update, destroy, policy, isExist } = require('../controllers/pizzas.controller');
const { isAuthenticated } = require('../controllers/index.controller');
const { validatepizzas } = require('../validators/pizzas');

/**
 * @openapi
 * path:
 * /pizza/find/all:
 *  get:
 *    description: Trae todas las pizzas
 *    summary: Trae todas las pizzas
 *    tags:
 *      - pizza
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No hay pizzas.
 */
router.get('/find/all', findAll);

/**
 * @openapi
 * path:
 * /pizza/find/{id}:
 *  get:
 *    description: Trae una pizza especifica por ID
 *    summary: Trae una pizza especifica por ID
 *    tags:
 *      - pizza
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No se encontro ninguna pizza.
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int(11)
 *          description: ID de la pizza
 */
router.get('/find/:id', isExist, find);

/**
 * @openapi
 * path:
 * /pizza:
 *   post:
 *      description: Crea una pizza
 *      summary: Crea una pizza
 *      tags:
 *        - pizza
 *      responses:
 *        200:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al crear la pizza
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
router.post('/', isAuthenticated, validatepizzas, store);

/**
 * @openapi
 * path:
 * /pizza/{id}:
 *   put:
 *      description: Actualiza una pizza por el id
 *      summary: Actualiza una pizza por el id
 *      tags:
 *        - pizza
 *      responses:
 *        201:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al actualizar la pizza
 *        401:
 *          description: El usuario no tiene los permisos necesarios
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int
 *          description: ID de la pizza
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
router.put('/:id', isAuthenticated, isExist, validatepizzas, policy, update);

/** 
 * @openapi
 * path:
 * /pizza/{id}:
 *   delete:
 *     description: Elimina una pizza
 *     summary: Elimina una pizza
 *     tags:
 *       - pizza
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
 *          description: ID de la pizza a eliminar
 */
router.delete('/:id', isAuthenticated, isExist, policy, destroy);

module.exports = router