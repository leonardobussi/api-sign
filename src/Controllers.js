const cript = require('bcrypt');
const storage = require('localtoken');
const resource = require('./Resource');
const auth = require('../main/auth');





exports.postLogar =  async (req, res, next) => {
    try {
        const resultado = await resource.validar(req.body);
        if(!resultado) {
            console.log('conta nao encontrada');
            return res.send('email incorreto')
            
        }
        if(!await cript.compare(req.body.senha, resultado.senha)) {
            console.log('senha incorreto');
            return res.send('senha incorreta')
            
        }

        const token = await auth.gerarToken( { resultado });
        storage.setInLocal('login', token);
        console.log('logado com sucesso');
        return res.send('logado com sucesso');

    } catch (err) {
        next(err);
    }
}



exports.postCriar =  async (req, res, next) => {
    try {
       let resultado = await resource.validar(req.body);
       if(!resultado){
           let adm = await resource.criar(req.body);
           console.log(adm)
           return res.send('registrado com sucesso')
       } else {
        console.log('adm ja existe');
        return res.send('ja registrado')
       }
    } catch (err) {
        next(err);
    }
}

exports.getDeuCerto =  async (req, res, next) => {
    try {      
           return res.send('seja bem vindo a essa rota')
       } 
        catch (err) {
        next(err);
    }
}