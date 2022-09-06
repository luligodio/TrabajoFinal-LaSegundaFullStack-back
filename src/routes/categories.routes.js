const express = require('express')
const router = express.Router()
const { findAll, find, store, update, destroy, policy, isExist } = require('../controllers/categories.controller');
const { isAuthenticated } = require('../controllers/index.controller');
const { validateCategories } = require('../validators/categories');

/**
 * @openapi
 * path:
 * /categories/find/all:
 *  get:
 *    description: Trae todas las categorias
 *    summary: Trae todas las categorias
 *    tags:
 *      - categories
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No hay categorias.
 */
 router.get('/find/all', findAll);

 /**
  * @openapi
  * path:
  * /categories/find/{id}:
  *  get:
  *    description: Trae una categoria especifica por ID
  *    summary: Trae una categoria especifica por ID
  *    tags:
  *      - categories
  *    responses:
  *        200:
  *         description: Regresa el token en el header.
  *        400:
  *          description: No se encontro ninguna categoria.
  *    parameters:
*        - in: path
*          name: id
*          required: true
*          schema:
*              type: int(11)
*          description: ID de la categoria
  */
 router.get('/find/:id', isExist, find);
 
 /**
  * @openapi
  * path:
  * /categories:
  *   post:
  *      description: Crea una categoria
  *      summary: Crea una categoria
  *      tags:
  *        - categories
  *      responses:
  *        200:
  *          description: Regresa el token en el header
  *        400:
  *          description: Ha ocurrido un error al crear la categoria
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
 router.post('/', isAuthenticated, validateCategories, store);
 
 /**
  * @openapi
  * path:
  * /categories/{id}:
  *   put:
  *      description: Actualiza una categoria por el id
  *      summary: Actualiza una categoria por el id
  *      tags:
  *        - categories
  *      responses:
  *        201:
  *          description: Regresa el token en el header
  *        400:
  *          description: Ha ocurrido un error al actualizar la categoria
  *        401:
  *          description: El usuario no tiene los permisos necesarios
  *      parameters:
  *        - in: path
  *          name: id
  *          required: true
  *          schema:
  *              type: int
  *          description: ID de la categoria
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
 router.put('/:id', isAuthenticated, isExist, validateCategories, policy, update);
 
 /** 
  * @openapi
  * path:
  * /categories/{id}:
  *   delete:
  *     description: Elimina una categoria
  *     summary: Elimina una categoria
  *     tags:
  *       - categories
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
  *          description: ID de la categoria a eliminar
  */
 router.delete('/:id', isAuthenticated, isExist, policy, destroy);

module.exports = router