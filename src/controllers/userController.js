const jwt = require('jsonwebtoken');
const connection = require('../database/connectionUser');

let authenticate = async (req, res) =>{
    const { user, password } = req.body
    const userResult = await connection('user').select('password').where({ "user": user }).limit(1);
    
    if (password === userResult[0].password) {
        var token = jwt.sign({ user }, process.env.SECRET, {
            expiresIn: 3000 
        });
        return res.status(200).send({ auth: true, token: token });
    }

    return res.status(500).send('Login inválido!');
}
module.exports = {
    authenticate: authenticate
}