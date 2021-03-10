create table guest(
	guest_name char(10) not null,
    content tinytext not null,
    visit_time datetime default now() not null 
);