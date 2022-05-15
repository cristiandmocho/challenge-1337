create database if not exists db1337;

use db1337;

create table if not exists coworkers (
  id int unsigned not null primary key auto_increment,
  name varchar(150) not null,
  email varchar (255) not null,
  phoneNumber varchar(30) null,
  office varchar(60) not null,
  manager varchar(255) not null,
  orgUnit varchar(60) not null,
  mainText text null,
  gitHub varchar(250) null,
  twitter varchar(250) null,
  stackOverflow varchar(250) null,
  linkedIn varchar(250) not null,
  imagePortraitUrl varchar(500) null,
  imageWallOfLeetUrl varchar(500) null,
  highlighted bool not null default 0,
  published bool not null default 1
);

create user if not exists 'user_1337'@'%' identified by 'Passw0rd#1337';

grant delete on db1337.* to 'user_1337'@'%';
grant insert on db1337.* to 'user_1337'@'%';
grant references on db1337.* to 'user_1337'@'%';
grant select on db1337.* to 'user_1337'@'%';
grant show view on db1337.* to 'user_1337'@'%';
grant trigger on db1337.* to 'user_1337'@'%';
grant update on db1337.* to 'user_1337'@'%';
grant execute on db1337.* to 'user_1337'@'%';
grant lock tables on db1337.* to 'user_1337'@'%';
grant usage on *.* to 'user_1337'@'%';

flush privileges;