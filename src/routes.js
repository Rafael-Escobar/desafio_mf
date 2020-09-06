const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const router = express.Router();
const userController = require("./controllers/userController");
const contactControler = require("./controllers/contactControler");
const middleware = require('./middleware');




router.route('/contact').post(
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            contacts: Joi.array().items(
                Joi.object().keys({
                    name: Joi.string().required().max(200),
                    cellphone: Joi.string().required().max(20).min(13),
                })
            ).required(),
        }),
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required()
        }).unknown()
    }),
    middleware.checkToken,
    contactControler.register
);

router.route('/authenticate').post(
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            user: Joi.string().required(),
            password: Joi.string().required(),
        })
    }),
    userController.authenticate
);

module.exports = router;