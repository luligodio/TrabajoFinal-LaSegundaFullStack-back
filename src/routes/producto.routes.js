const express = require('express')
const router = express.Router()
const { findAll, find, store, update, destroy, policy, isExist } = require('../controllers/producto.controller');
const { isAuthenticated } = require('../controllers/index.controller');
const { validateProducto } = require('../validators/Producto');

/**
 * @openapi
 * path:
 * /productos/find/all:
 *  get:
 *    description: Trae todas las Productos
 *    summary: Trae todas las Productos
 *    tags:
 *      - productos
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No hay Productos.
 */
router.get('/find/all', findAll);

/**
 * @openapi
 * path:
 * /productos/find/{id}:
 *  get:
 *    description: Trae un Producto especifica por ID
 *    summary: Trae un Producto especifica por ID
 *    tags:
 *      - productos
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No se encontro ningun Producto.
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int(11)
 *          description: ID de la Producto
 */
router.get('/find/:id', isExist, find);

/**
 * @openapi
 * path:
 * /productos:
 *   post:
 *      description: Crea un Producto
 *      summary: Crea un Producto
 *      tags:
 *        - productos
 *      responses:
 *        200:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al crear la Producto
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
router.post('/', isAuthenticated, validateProducto, store);

/**
 * @openapi
 * path:
 * /productos/{id}:
 *   put:
 *      description: Actualiza un Producto por el id
 *      summary: Actualiza un Producto por el id
 *      tags:
 *        - productos
 *      responses:
 *        201:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al actualizar la Producto
 *        401:
 *          description: El usuario no tiene los permisos necesarios
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int
 *          description: ID de la Producto
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
router.put('/:id', isAuthenticated, isExist, validateProducto, policy, update);

/** 
 * @openapi
 * path:
 * /productos/{id}:
 *   delete:
 *     description: Elimina un Producto
 *     summary: Elimina un Producto
 *     tags:
 *       - productos
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
 *          description: ID de la Producto a eliminar
 */
router.delete('/:id', isAuthenticated, isExist, policy, destroy);

module.exports = router