const storage = require('localtoken');
const jwt = require('jsonwebtoken');

const keys = require('./keys');

exports.autorizar = async (req, res, next) => {
    try {
        const token = await storage.getInLocal('login');
        if(!token){
            return res.send('vc não está autorizado')
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