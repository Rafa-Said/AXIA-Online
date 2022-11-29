var medidaModel = require("../models/medidaModel");

// function buscarDadosMaquina(req, res){

//     console.log(`Recuperando medidas em tempo real`);

//     medidaModel.buscarDadosMaquina().then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }

// ROTAS ULTIMAS E TEMPO REAL DO PROJETO COMO UM TODO
function buscarUltimasMedidas(req, res) {

    const limite_linhas = 1;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoReal(req, res){

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// MEDIDAS KOTLIN
function buscarUltimaskt(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimaskt(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// ROTAS INDIVIDUAL - ISABELA HANTKE
function TempoRealIsa(req, res){

    idAquario = req.params.idAquario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.TempoRealIsa(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function MedidasIsa(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.MedidasIsa( idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// ROTAS INDIVIDUAL - VITOR MACAUBA
function MedidasBytes(req, res) {

    const limite_linhas = 1;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.MedidasBytes( limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// ROTAS INDIVIDUAL - RAFAELA DIAS 
function buscarUltimasMed(req, res) {

    const limite_linhas = 5;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMed(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasvm(req, res){

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarUltimasvm().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    // buscarDadosMaquina,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimaskt,
    MedidasIsa,
    TempoRealIsa,
    buscarUltimasMed,
    buscarUltimasvm
}