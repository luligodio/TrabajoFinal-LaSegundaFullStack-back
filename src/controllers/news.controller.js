const moment = require('moment');
const { News, User, Category } = require('../../../swift-backend/src/database/models/index')
const { convertToUrl } = require('../../../swift-backend/src/middlewares/convertToUrl')
const sequelize = require('sequelize');

//API
const findAll = async (req, res) => {
  let pageAsNumber = Number.parseInt(req.query.page);
  let page = 0, size = 4;
  if (!Number.isNaN(pageAsNumber)) {
    page = pageAsNumber;
  }
  let news = await News.findAndCountAll({ 
    limit: size, 
    offset: page * size, 
    order : sequelize.literal('updatedAt DESC'), 
    include: 'category'
  } )

  return res.send({
    content: news.rows,
    totalPages: Math.ceil(news.count / size)
  });
};

const find = async (req, res) => {
  let news = await News.findByPk(req.params.id);

  if (news) {
    return res.status(200).json(news)
  } else {
    return res.status(404).json({status:404, msg: "noticia no encontrada"})
  }
};

const store = async (req, res) => {
  let params = req.body;
  let url = req.body.title +"-" + moment(new Date(), "DD-MM-YYYY").format("DD-MM-YYYY");
  params.url = convertToUrl(url)
  let news = await News.findOne({ where: { url: params.url } });
  if (!news) {
    news = await News.create(params)
    if (news) {
      return res.status(200).json({status:200, msg: "Noticia creada correctamente", news})
    } else {
      return res.status(500).json({status:500, msg: "No se pudo crear la noticia"})
    }
  } else {
    return res.status(400).json({status:400, msg: "Ya existe una noticia con ese url"})
  }
};

const update = async (req, res) => {
  const params = req.body
  let news = await News.findByPk(req.params.id);
  if (params.isNotificable) {params.isNotificable = 1} else {params.isNotificable = 0}
console.log(params.isNotificable);
  if(news){
    //Corroborar si el titulo fue cambiado
    if (news.title == params.title) {
      news.content = params.content
      news.category = params.category
      news.link = params.link
      news.icon = params.icon
      news.isNotificable = params.isNotificable
      let url = params.title +"-" + moment(new Date(), "DD-MM-YYYY").format("DD-MM-YYYY");
      news.url = url
      news.save().then(news => {
        res.status(201).json({status:201,news})
      })
    } else {
      news.title = params.title
      news.content = params.content
      news.category = params.category
      news.link = params.link
      news.icon = params.icon
      news.isNotificable = params.isNotificable
      let url = params.title +"-" + moment(new Date(), "DD-MM-YYYY").format("DD-MM-YYYY");
      news.url = convertToUrl(url);
      let urlCheck = await News.findOne({ where: { url: news.url } });
      if (!urlCheck) {
        news.save().then(news => {
          res.status(201).json({status:201,news})
        })
      } else {
        return res.status(400).json({status:400, msg: "Ya existe una noticia con ese titulo creado en el mismo dia"})
      }
    }
  } else {
    return res.status(404).json({status:404, msg:"noticia no encontrada"})
  }
};

const destroy = async (req, res) => {
  let news = await News.findByPk(req.params.id);

  if(!news){
    return res.status(404).json({msg:"noticia no encontrada"})
  } else {
    news.destroy().then(news => {
      res.status(200).json({status:200,news})
    })
  }
};

//Policy
const policy = async (req, res, next) => {
  let news = await News.findOne({ where: { id: req.params.id } });
  if (req.user.id === news.created_by || User.isAdmin(req.user.roles)){
    req.isAdmin = true;
    next()
  } else {
    res.status(401).json({msg:"No autorizado"})
  }
};
const policyURL = async (req, res, next) => {
  let news = await News.findOne({ where: { url: req.params.url } });
  if (req.user.id === news.created_by || User.isAdmin(req.user.roles)){
    res.isAdmin = true;
    next()
  } else {
    res.status(401).json({msg:"No autorizado"})
  }
};

//Middlewares

const isExist = async (req, res, next) => {
  let news = await News.findByPk(req.params.id);

  if (news) {
    req.news = news.dataValues
    return next()
  } else {
    return res.status(404).json({status:404, msg: "noticia no encontrada"})
  }
};

const findUrl = async (req, res, next) => {
  let news = await News.findOne({ where: { url: req.params.url } });

  if (news) {
    return next()
  } else {
    return res.redirect('/news');
  }
};

module.exports = {
  find,
  findAll,
  store,
  update,
  destroy,
  isExist,
  findUrl,
  policy,
  policyURL
}
