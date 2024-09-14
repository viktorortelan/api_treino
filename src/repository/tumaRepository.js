import con from "./connection.js";

export async function inserirTurma(turma) {
    let comando = `
        insert into tb_turma(nm_turma, ds_curso, nr_ano_letivo, qtd_capacidade, bt_ativo, dt_inclusao)
        values (?,?,?,?,?,?)
    `;

    let info = await con.query(comando, [turma.turma, turma.curso, turma.ano, turma.capacidade, turma.ativo, turma.inclusao]);
    let registro = info[0]
    return registro.insertId;
} 


export async function listaTurma() {
    let comando = `
        select * from tb_turma;
    ` 
    let info = await con.query(comando);
    let registro = info[0];
    return registro;
}


export async function buscarTurma(id) {
    let comando = `
         select id_turma,
                nm_turma,
                ds_curso,
                nr_ano_letivo,
                qtd_capacidade,
                bt_ativo,
                dt_inclusao
         from tb_turma
         where id_turma = ?
    `;
    
    let registro = await con.query(comando, [id]);
    let info = registro[0];
    return info;
}


export async function consultarAnoCurso (ano, curso) {
    let comando = `
         select id_turma,
                nm_turma,
                ds_curso,
                nr_ano_letivo,
                qtd_capacidade,
                bt_ativo,
                dt_inclusao
         from tb_turma
         where nr_ano_letivo = ? and ds_curso = ?
    `;

    let registro = await con.query(comando, [ano, curso]);
    let info = registro[0];
    return info;
}

export async function updateTurma(id, turmaOBJ) {
    let comando = `
        update tb_turma set
            nm_turma = ?,
            ds_curso = ? ,
            nr_ano_letivo = ? ,
            qtd_capacidade = ? ,
            bt_ativo = ? ,
            dt_inclusao = ?
        where id_turma = ?;
    `;

    let resposta = await con.query(comando, [turmaOBJ.turma, turmaOBJ.curso, turmaOBJ.ano, turmaOBJ.capacidade, turmaOBJ.ativo, turmaOBJ.inclusao, id ]);
    let info = resposta[0];
    return info.affectedRows;
}

export async function deleteTurma(id) {
    const comando = `
    delete from tb_turma
    where id_turma = ?
    `

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];
    return info.affectedRows 
} 

