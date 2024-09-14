create database BD_turma;
use BD_turma;

create table tb_turma (
id_turma int primary key auto_increment,
nm_turma varchar(200),
ds_curso varchar(200),
nr_ano_letivo int,
qtd_capacidade int,
bt_ativo boolean,
dt_inclusao datetime
);



select*from tb_turma;



select*from tb_turma
where id_turma = 3;


insert into tb_turma(nm_turma, ds_curso, nr_ano_letivo, qtd_capacidade, bt_ativo, dt_inclusao)
values (?,?,?,?,?,?);

update tb_turma 
set nm_turma = ?,
    ds_curso = ? ,
    ds_curso = ? ,
    nr_ano_letivo = ? ,
    qtd_capacidade = ? ,
    bt_ativo = ? ,
    dt_inclusao = ?
where id_turma = ?;


create table tb_matricula_aluno (
id_matricula_aluno int primary key auto_increment,
id_turma int,
nm_aluno varchar(200),
ds_sexo varchar(200),
dt_nascimento date,
ds_email varchar(200),
bt_ativo boolean,
foreign key (id_turma) references tb_turma(id_turma) 
);

drop table tb_matricula_aluno;

select*from tb_matricula_aluno;


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



--....--