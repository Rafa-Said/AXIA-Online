var database = require("../database/config");

// function buscarDadosMaquina() {
//     const instrucaoSql = `select * from Leitura order by idLeitura;`;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql)
// }

function buscarUltimasMedidas(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =`SELECT TOP 7 * 
                        FROM [dbo].[Leitura] 
                            ORDER BY DataHora DESC`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

            instrucaoSql = `SELECT * 
                                FROM Leitura 
                                    ORDER BY DataHora DESC LIMIT 7;`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoReal() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
            SELECT TOP 7 * 
                FROM [dbo].[Leitura] 
                    ORDER BY DataHora DESC
    
        `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT * 
                            FROM Leitura 
                                ORDER BY DataHora DESC LIMIT 7;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimaskt(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =`SELECT TOP 5 processador, dataHora
                        FROM [dbo].[LeituraKotlin] 
                            ORDER BY DataHora DESC;
        `

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

            instrucaoSql = `SELECT vMem, DataHora FROM Leitura ORDER BY DataHora DESC LIMIT ${limite_linhas};`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function TempoRealIsa(limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
            SELECT TOP 7 * 
                FROM [dbo].[Leitura] 
                    ORDER BY DataHora DESC;
    
        `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT * 
                            FROM Leitura 
                                ORDER BY DataHora DESC limit ${limite_linhas};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function MedidasIsa(limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT UsoDiscoR, LivreDiscoR, DiscoRTotal, DataHora, convert(varchar, DataHora, 108) FROM Leitura ORDER BY idLeitura;`
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT UsoDiscoR, LivreDiscoR, DiscoRTotal, DataHora, data_format(DataHora, '%H:%i') as horarioIsa FROM Leitura ORDER BY idLeitura desc limit ${limite_linhas};`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMed(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =`SELECT TOP 5 RamUsada, DataHora
                        FROM [dbo].[Leitura] ORDER BY vMem DESC;
        `
        // SELECT TOP 5 vMem, DataHora
        //                 FROM [dbo].[Leitura]  
        //                         ORDER BY vMem DESC;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

            instrucaoSql = `SELECT vMem, DataHora FROM Leitura ORDER BY DataHora DESC LIMIT ${limite_linhas};`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

    // MEDIDAS VIRTUAL MEMORY
}
function buscarUltimasvm(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =`SELECT AVG(vMem) as vMem FROM [dbo].[Leitura];`
        
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

            instrucaoSql = `SELECT vMem, DataHora FROM Leitura ORDER BY DataHora DESC LIMIT ${limite_linhas};`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function MedidasBytes() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT TOP 5 ByteEnv, BytesRec FROM [dbo].[Leitura] ORDER BY DataHora DESC;`
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT BytesEnv, BytesRec FROM Leitura ORDER BY DataHora`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
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