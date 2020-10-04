//const cript = require('bcrypt'); 
const storage = require('localtoken');


const resource = require('./Resource');
const auth = require('../main/auth');



exports.getLogar =  async (req, res, next) => {
    try {
        return res.send('bora logar')
    } catch (err) {
        next(err);
    }
}

exports.postLogar =  async (req, res, next) => {
    try {
        const resultado = await resource.validarRegistro(req.body);
        console.log(resultado)
        if(!resultado) {
            console.log('conta nao encontrada');
            return res.send('conta nao encontrada')
            
        }
    
        const token = await auth.gerarToken( { resultado });
        storage.setInLocal('Login', token);
        return res.send('senha e email corretos')


    } catch (err) {
        next(err);
    }
}

exports.getDeuCerto =  async (req, res, next) => {
    try {
        return res.send('essa rota só é acessada caso esteja logado')
    } catch (err) {
        next(err);
    }
}
