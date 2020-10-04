require('./Model');

const mongoose = require('mongoose');

const cript = require('bcrypt');
const salt = 10;

const modelo =  mongoose.model('login');

class Resource  {
    static async criar(dados){
        let { senha } = dados;
        const hash = await cript.hash(senha, salt);
        senha = hash;
        dados.senha = senha;
        return await new  modelo(dados).save();
    }
    static async  validar(dados) {
        let { email } = dados;
        let adm = await modelo.findOne({email});
        return adm;
    }
    static async  validar(dados) {
        let { email } = dados;
        let adm = await modelo.findOne({email});
        return adm;
    }
}

module.exports = Resource;