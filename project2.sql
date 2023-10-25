create database if not exists project2;
use project2;
drop table if exists items;

create table if not exists items(

id decimal (9,0) unique default null,
name varchar(64) default null,
description varchar(64) default null,
image varchar(255) default null


)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
