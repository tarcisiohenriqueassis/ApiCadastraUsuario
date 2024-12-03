import express from 'express';
import cors from 'cors';

import {retornaListaUsuariosCadastrados,retornaListaUsuariosCadastradosID, cadastraUsuario} from './service/service.js';
import { validaUsuario } from './validacao/validacao.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/usuario', async (req,res)=>{

    const retornaLista = await retornaListaUsuariosCadastrados();
    res.json(retornaLista);
});

app.get('/usuario/:id', async (req,res)=>{
    
    let id = req.params.id;

    const regex = /^\d+$/;
    const validaID = regex.test(id);

    if(!validaID){
        res.json({mensagem :"Digite apenas numeros "});
        return;
    }

    const resultadoBD = await retornaListaUsuariosCadastradosID(parseInt(id));

    if(resultadoBD.length > 0){
        res.json(resultadoBD)
    }
    else{
        res.status(404).json({mensagem:"Usuario não encontrado"})
    }
})

app.post('/usuario/cadastrar', async (req,res)=>{
    
    let nome = req.body.nome;
    let email = req.body.email;
    let telefone = req.body.telefone;

    const validaDados = validaUsuario(nome,email,telefone);

    if(validaDados.status){
        await cadastraUsuario(nome,email,telefone);
        res.status(204).end();
    }
    else{
        res.status(400).json({mensagem : validaDados.mensagem});
        return
    }
});                    

app.listen(3001,async ()=>{
    console.log("Servidor iniciado na port 3001");
});