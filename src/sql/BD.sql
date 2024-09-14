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
