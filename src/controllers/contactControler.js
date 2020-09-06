const macapa = require("./contactControlerMacapa");
const varejao = require("./contactControlerVarejao");

const register = (req, res) => {
    if (req.decoded.user === 'macapa') {
        macapa.register(req, res);
    } else if (req.decoded.user === 'varejao') {
        varejao.register(req, res);
    } else {
        console.error('contactControler undefined =' + req.decoded.user);
        res.status(500)
    }
}

module.exports = {
    register: register
};