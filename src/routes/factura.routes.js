const express = require('express')
const router = express.Router()
const { findAll, find, store, update, destroy, policy, isExist } = require('../controllers/factura.controller');
const { isAuthenticated } = require('../controllers/index.controller');
const { validateFactura } = require('../validators/Factura');

/**
 * @openapi
 * path:
 * /Facturas/find/all:
 *  get:
 *    description: Trae todas las Facturas
 *    summary: Trae todas las Facturas
 *    tags:
 *      - Facturas
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No hay Facturas.
 */
router.get('/find/all', findAll);

/**
 * @openapi
 * path:
 * /Facturas/find/{id}:
 *  get:
 *    description: Trae una Factura especifica por ID
 *    summary: Trae una Factura especifica por ID
 *    tags:
 *      - Facturas
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No se encontro ninguna Factura.
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int(11)
 *          description: ID de la Factura
 */
router.get('/find/:id', isExist, find);

/**
 * @openapi
 * path:
 * /Facturas:
 *   post:
 *      description: Crea una Factura
 *      summary: Crea una Factura
 *      tags:
 *        - Facturas
 *      responses:
 *        200:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al crear la Factura
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
router.post('/', isAuthenticated, validateFactura, store);

/**
 * @openapi
 * path:
 * /Facturas/{id}:
 *   put:
 *      description: Actualiza una Factura por el id
 *      summary: Actualiza una Factura por el id
 *      tags:
 *        - Facturas
 *      responses:
 *        201:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al actualizar la Factura
 *        401:
 *          description: El usuario no tiene los permisos necesarios
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int
 *          description: ID de la Factura
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
router.put('/:id', isAuthenticated, isExist, validateFactura, policy, update);

/** 
 * @openapi
 * path:
 * /Facturas/{id}:
 *   delete:
 *     description: Elimina una Factura
 *     summary: Elimina una Factura
 *     tags:
 *       - Facturas
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
 *          description: ID de la Factura a eliminar
 */
router.delete('/:id', isAuthenticated, isExist, policy, destroy);

module.exports = router