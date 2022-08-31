const Router = require('express');
const router = Router();

const {index, show, register, login, destroy, logOut, findAll} = require('../controllers/index.controller.js');
const { validateLogin, validateRegister } = require('../validators/auth');
const { EmailIsUnique } = require('../validators/EmailIsUnique');

// router.get("/", index);

// router.get("/create", create);

// router.get("/show/:id", show);

// router.get("/edit/:id", edit);

//API

router.get("/find", index);

router.get("/find/all", findAll);

router.get("/find/:id", show);

router.post("/register", validateRegister, EmailIsUnique, register);

router.post("/login", validateLogin, login);

router.get('/logout', logOut)

router.delete("/:id", destroy);

module.exports = router;