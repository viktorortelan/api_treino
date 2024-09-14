import { inserirTurma, listaTurma, updateTurma, deleteTurma, buscarTurma, consultarAnoCurso } from "../repository/tumaRepository.js";
import { Router } from "express";
const endpoint = Router();

endpoint.post('/inserir', async (req, resp) => {
   try {
    let turma = req.body;
    let id = await inserirTurma(turma);
    resp.send({
        novoID: id
    }) 
   } 
   catch (err) {
        resp.status(400).send({
            erro:err.message
        })
   }
    
    

})


endpoint.get('/consultar', async (req, resp) => {
    try {
        let registro = await listaTurma();
        resp.send(registro)
    } 
    catch (err) {
        resp.status(400).send({
            erro:err
        })
    }
})

endpoint.get('/buscar/turma', async (req, resp) => {
    let id = req.query.id;
    let registro = await buscarTurma(id);
    resp.send(registro)
})

endpoint.get('/turma/:ano/curso', async (req, resp) => {
    let ano = req.params.ano;
    let curso = req.query.curso;

    let registro = await consultarAnoCurso(ano, curso);
    resp.send(registro);
})

endpoint.put('/inserir/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let turmaOBJ = req.body;
        let linhasAfetada = await updateTurma(id, turmaOBJ);
        if(linhasAfetada >= 1) {
            resp.send();
        } else {
            resp.status(400).send({
                erro:"nenhuma linha foi alterada"
            })
        }
    } 
    
    catch (err) {
        resp.status(400).send({
            erro:err
        })
    }
})

endpoint.delete('/delete/:id', async (req, resp) => {
    try {
        let id = req.params.id;
       
        let linhasAfetada = await deleteTurma(id);
        if(linhasAfetada >= 1) {
            resp.send({
                mensagem: "deletado com sucesso"
            });
        } else {
            resp.status(400).send({
                erro:"Nada foi deletado"
            })
        }
    } 
    
    catch (err) {
        resp.status(400).send({
            erro:err
        })
    }
})



export default endpoint;