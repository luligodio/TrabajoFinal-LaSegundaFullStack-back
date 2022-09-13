const express = require('express')
const router = express.Router()
const { findAll, find, store, update, destroy, policy, isExist } = require('../controllers/carrito.controller');

const { validateCarrito } = require('../validators/Carrito');

/**
 * @openapi
 * path:
 * /Carritos/find/all:
 *  get:
 *    description: Trae todos los Carritos
 *    summary: Trae todos los Carritos
 *    tags:
 *      - Carritos
 *    responses:
 *        200:
 *         description: Regresa el token en el compra.
 *        400:
 *          description: No hay Carritos.
 */
router.get('', findAll);

/**
 * @openapi
 * path:
 * /Carritos/find/{id}:
 *  get:
 *    description: Trae un compra especifica por ID
 *    summary: Trae un compra especifica por ID
 *    tags:
 *      - Carritos
 *    responses:
 *        200:
 *         description: Regresa el token en el compra.
 *        400:
 *          description: No se encontro ningun compra.
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int(11)
 *          description: ID de la compra
 */
router.get('/:id', isExist, find);

/**
 * @openapi
 * path:
 * /Carritos:
 *   post:
 *      description: Crea un compra
 *      summary: Crea un compra
 *      tags:
 *        - Carritos
 *      responses:
 *        200:
 *          description: Regresa el token en el compra
 *        400:
 *          description: Ha ocurrido un error al crear la compra
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
router.post('/', validateCarrito, store);

/**
 * @openapi
 * path:
 * /Carritos/{id}:
 *   put:
 *      description: Actualiza un compra por el id
 *      summary: Actualiza un compra por el id
 *      tags:
 *        - Carritos
 *      responses:
 *        201:
 *          description: Regresa el token en el compra
 *        400:
 *          description: Ha ocurrido un error al actualizar la compra
 *        401:
 *          description: El usuario no tiene los permisos necesarios
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int
 *          description: ID de la compra
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
router.put('/:id', isExist, validateCarrito, policy, update);

/** 
 * @openapi
 * path:
 * /Carritos/{id}:
 *   delete:
 *     description: Elimina un compra
 *     summary: Elimina un compra
 *     tags:
 *       - Carritos
 *     responses:
 *       200:
 *         description: Regresa el token en el compra
 *       400:
 *         description: ID invalido
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int(11)
 *          description: ID de la compra a eliminar
 */
router.delete('/:id', isExist, policy, destroy);

module.exports = router