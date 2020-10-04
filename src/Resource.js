const mongoose = require('mongoose');
require('./Model');
const modelo =  mongoose.model('Login');


class Resource  {
    static async criar(dados){
        let login = await modelo.findOne({dados});
        console.log(login)
    }
    static async  validarRegistro(dados) {
        let { email } = dados;
        let morador = await modelo.findOne({email});
        return morador;
    }
}

module.exports = Resource;