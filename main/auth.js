const storage = require('localtoken');
const jwt = require('jsonwebtoken');

const keys = require('../../main/keys');

exports.autorizar = async (req, res, next) => {
    try {
        const token = await storage.getInLocal('Login');
        if(!token){
            return res.redirect('/')
        }
        return next();
    } catch (err) {
        next(err);
    }
}


exports.gerarToken = async (dados) => {
    return await jwt.sign(dados, keys.auth.secret);
}

exports.decodificar = async (token) => {
    const dados = await jwt.decode(token, keys.auth.secret);
    return dados;
} 