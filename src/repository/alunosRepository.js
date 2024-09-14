import con from "./connection.js";


export async function addAluno(alunos) { 
    let comando = `
        insert into tb_matricula_aluno(id_turma, nm_aluno, ds_sexo, dt_nascimento, ds_email, bt_ativo)
        values (?,?,?,?,?,?)
    `;

    let registro = await con.query(comando, [alunos.turma, alunos.nome, alunos.sexo, alunos.nascimento, alunos.email, alunos.ativo]);
    let info = registro[0];
    return info.insertId;
}


