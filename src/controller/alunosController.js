import { addAluno, mostrarAluno } from "../repository/alunosRepository.js";
import { Router } from "express";
const endpoint = Router();

endpoint.post('/inserir/aluno', async (req, resp) => {
    let alunos = req.body;
    let id = await addAluno(alunos);
    resp.send({
        novoID: id
    });
});

endpoint.get('/mostrar/aluno', async (req, resp) => {
    let registro = await mostrarAluno();
    resp.send(registro)
}) 


export default endpoint;