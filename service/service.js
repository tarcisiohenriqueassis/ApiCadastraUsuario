import { Pool } from "../conexao/conexao.js";


async function executaQuery(conexao,query) {
    
    const resultadoBD = await conexao.query(query);
    const resultado = await resultadoBD[0];

    return resultado;
}

async function retornaListaUsuariosCadastrados(){

    const conexao = await Pool.getConnection();
    const query ='SELECT id,nome,email,telefone FROM clientes';

    const resultadoBD = await executaQuery(conexao,query);

    conexao.release();

    return resultadoBD;
}

async function retornaListaUsuariosCadastradosID(id) {
    
    const conexao = await Pool.getConnection();
    const query = 'SELECT id,nome,email,telefone FROM clientes WHERE id='+id;

    const resultadoBD = await executaQuery(conexao,query);

    conexao.release();

    return resultadoBD;
}

async function cadastraUsuario(nome,email,telefone) {
    
    const conexao = await Pool.getConnection();
    const cadastraUsuario = await conexao.query('INSERT INTO clientes(nome,email,telefone) VALUES(?,?,?)',[nome,email,telefone]);
    
    return cadastraUsuario;
}

export {retornaListaUsuariosCadastrados, retornaListaUsuariosCadastradosID, cadastraUsuario };