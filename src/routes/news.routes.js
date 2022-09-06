const express = require('express')
const router = express.Router()
const { isAuthenticated} = require('../controllers/index.controller');
const { find, findAll, store, update, destroy, isExist, policy } = require('../controllers/news.controller');
const { validateNews } = require('../validators/news');

/**
 * @openapi
 * path:
 * /news/find/all:
 *  get:
 *    description: Trae todas las noticias
 *    summary: Trae todas las noticias
 *    tags:
 *      - news
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No hay noticiaes.
 */
router.get('/find/all', findAll);

/**
 * @openapi
 * path:
 * /news/find/{id}:
 *  get:
 *    description: Trae una noticia especifica por ID
 *    summary: Trae una noticia especifica por ID
 *    tags:
 *      - news
 *    responses:
 *        200:
 *         description: Regresa el token en el header.
 *        400:
 *          description: No se encontro ninguna noticia.
 */
router.get('/find/:id', isExist, find);

/**
 * @openapi
 * path:
 * /news:
 *   post:
 *      description: Crea una noticia
 *      summary: Crea una noticia
 *      tags:
 *        - news
 *      responses:
 *        200:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al crear la noticia
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
 *                content:
 *                  type: string
 *                  format: varchar
 *                  example: ejemplo
 *                category_id:
 *                  type: integer
 *                  format: int(50)
 *                  example: 1
 *                created_by:
 *                  type: integer
 *                  format: int(100)
 *                  example: 1
 *                idNotificable:
 *                  type: bool
 *                  format: bool
 *                  example: true
 */
router.post('/', isAuthenticated, validateNews, store);

/**
 * @openapi
 * path:
 * /news/{id}:
 *   put:
 *      description: Actualiza una noticia por el id
 *      summary: Actualiza una noticia por el id
 *      tags:
 *        - news
 *      responses:
 *        201:
 *          description: Regresa el token en el header
 *        400:
 *          description: Ha ocurrido un error al actualizar la noticia
 *        401:
 *          description: El usuario no tiene los permisos necesarios
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: int
 *          description: ID de la noticia
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  format: varchar(50)
 *                  example: ejemplo
 *                content:
 *                  type: string
 *                  format: varchar
 *                  example: ejemplo
 *                category_id:
 *                  type: integer
 *                  format: int(50)
 *                  example: 1
 *                created_by:
 *                  type: integer
 *                  format: int(100)
 *                  example: 1
 *                idNotificable:
 *                  type: bool
 *                  format: bool
 *                  example: true
 */
router.put('/:id', isAuthenticated, isExist, validateNews, policy, update);

/**
 * @openapi
 * path:
 * /news/{id}:
 *   delete:
 *     description: Elimina una noticia
 *     summary: Elimina una noticia
 *     tags:
 *       - news
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
 *          description: ID de la noticia a eliminar
 */
router.delete('/:id', isAuthenticated, isExist, policy, destroy);

module.exports = router