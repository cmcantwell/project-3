create table vaccines (
	Date DATE not null,
	MMWR_week int not null,
	Location varchar(30) not null,
	Administered int,
	Administered_5Plus int,
	Administered_12Plus int,
	Administered_18Plus int,
	Administered_65Plus int
);

drop table vaccines