create database furniture_spring2;
use furniture_spring2;
create table app_user(
id_user int primary key auto_increment,
name_user varchar(99),
encryted_password varchar(255)
);
create table app_role(
id_role int primary key auto_increment,
name_role varchar(99)
);
create table user_role(
id_user_role int,
id_role int,
id_user int,
foreign key (id_role) references app_role(id_role),
foreign key (id_user) references app_user(id_user)
);

create table customer(
id_customer int primary key auto_increment,
name_customer varchar(99),
date_of_birth date,
gender varchar(30),
id_card varchar(99),
phone_number varchar(99),
email varchar(99),
address varchar(255),
id_user int,
foreign key (id_user) references app_user(id_user)
);

create table employee(
id_employee int primary key auto_increment,
name_employee varchar(99),
date_of_birth date,
gender varchar(30),
id_card varchar(99),
phone_number varchar(99),
email varchar(99),
address varchar(255),
salary double,
id_user int,
foreign key (id_user) references app_user(id_user)
);
create table product_type(
id_product_type int primary key auto_increment,
name_product_type varchar(255)
);
create table room_type(
id_room_type int primary key auto_increment,
name_room_type varchar(99)
);

create table product(
id_product int primary key auto_increment,
name_product varchar(255),
brand varchar(99),
color varchar(99),
material varchar(99),
size varchar(99),
quantity int,
country_of_origin varchar(99),
`description` mediumtext,
image varchar(255),
price double,
id_product_type int,
id_room_type int,
foreign key (id_product_type) references product_type(id_product_type),
foreign key (id_room_type) references room_type(id_room_type)

);
create table orders(
id_order int primary key auto_increment,
total_payment double,
booking_order date,
status_payment bit(1),
id_customer int,
foreign key (id_customer) references customer(id_customer)
);
create table order_detail(
id_order_detail int primary key auto_increment,
id_product int,
id_order int,
quantity_order int,
foreign key (id_product) references product(id_product),
foreign key (id_order) references orders(id_order)
);



