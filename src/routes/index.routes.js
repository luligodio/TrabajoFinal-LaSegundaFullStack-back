const Router = require('express');
const router = Router();

const {index, show, register, login, destroy, logOut, findAll} = require('../controllers/index.controller.js');
const { validateLogin, validateRegister } = require('../validators/auth');
const { EmailIsUnique } = require('../middlewares/EmailIsUnique');

//API

/**
 * @openapi
 * path:
 * /find:
 *  get:
 *    description: Listado de usuarios
 *    summary: Listado de usuarios
 *    tags:
 *      - usuarios
 *    responses:
 *        404:
 *          description: No se encontro la pagina.
 */
router.get("/find", index);

/**
 * @openapi
 * path:
 * /find:
 *  get:
 *    description: Listado de usuarios
 *    summary: Listado de usuarios
 *    tags:
 *      - usuarios
 *    responses:
 *        404:
 *          description: No se encontro la pagina.
 */
router.get("/find/all", findAll);

/**
 * @openapi
 * path:
 * /find/{id}:
 *  get:
 *    description: Vista de la edicion una categoria
 *    summary: Vista de la edicion una categoria
 *    tags:
 *      - usuarios
 *    responses:
 *        404:
 *          description: No se encontro la pagina.
 */
router.get("/find/:id", show);

 /**
  * @openapi
  * path:
  * /register:
  *   post:
  *      description: Registra un usuario
  *      summary: Registra un usuario
  *      tags:
  *        - usuarios
  *      requestBody:
  *        required: true
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                email:
  *                  type: string
  *                  format: varchar(100)
  *                  example: ejemplo@syloper.com
  *                password:
  *                  type: string
  *                  format: varchar(255)
  *                  example: secret
  *                confirmPassword:
  *                  type: string
  *                  format: varchar(255)
  *                  example: secret
  *      responses:
  *        200:
  *          description: Usuario creado
  *        400:
  *          description: Error al crear usuario
  */
router.post("/register", validateRegister, EmailIsUnique, register);

 /**
  * @openapi
  * path:
  * /login:
  *   post:
  *      description: Logeo de usuario
  *      summary: Logeo de usuario
  *      tags:
  *        - usuarios
  *      requestBody:
  *        required: true
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                email:
  *                  type: string
  *                  format: varchar(100)
  *                  example: ejemplo@syloper.com
  *                password:
  *                  type: string
  *                  format: varchar(255)
  *                  example: secret
  *      responses:
  *        200:
  *          description: Usuario logueado correctamente
  *        401:
  *          description: Usuario y/o contraseña incorrecta
  *        404:
  *          description: Email invalido
  *        500:
  *          description: Error en la base de datos
  */
router.post("/login", validateLogin, login);

 /**
  * @openapi
  * path:
  * /api/logout:
  *   get:
  *      description: Deslogueo / Elimina el token
  *      summary: Deslogueo / Elimina el token
  *      tags:
  *        - usuarios
  */
router.get('/logout', logOut)

 /** 
  * @openapi
  * path:
  * /{id}:
  *   delete:
  *     description: Elimina un usuario
  *     summary: Elimina un usuario
  *     tags:
  *       - usuarios
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
  *          description: ID del usuario a eliminar
  */
router.delete("/:id", destroy);

module.exports = router;