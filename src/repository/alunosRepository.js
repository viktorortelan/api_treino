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

export async function mostrarAluno(){
    let comando = `
        SELECT ma.id_matricula_aluno,
            ma.nm_aluno,
            ma.ds_sexo,
            ma.dt_nascimento,
            ma.ds_email,
            ma.bt_ativo,
            t.nm_turma,
            t.ds_curso
        FROM tb_matricula_aluno ma
        JOIN tb_turma t ON ma.id_turma = t.id_turma;
    `;
    let registro = await con.query(comando);
    let info = registro[0];
    return info;
}


