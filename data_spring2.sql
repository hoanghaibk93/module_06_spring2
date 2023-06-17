create database furniture_spring2;
use furniture_spring2;
drop database furniture_spring2;
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
id_role int,
id_user int,
foreign key (id_role) references app_role(id_role),
foreign key (id_user) references app_user(id_user),
primary key(id_role,id_user)
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
introduce mediumtext,
`description` mediumtext,
image varchar(255),
original_price double,
sale_price double,
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
create table cart(
id_cart int primary key auto_increment,
id_product int,
id_customer int,
quantity int,
date_create date,
status_cart bit(1),
foreign key (id_product) references product(id_product),
foreign key (id_customer) references customer(id_customer)
);

INSERT INTO `furniture_spring2`.`app_role` (`id_role`, `name_role`) VALUES ('1', 'user');
INSERT INTO `furniture_spring2`.`app_role` (`id_role`, `name_role`) VALUES ('2', 'admin');
INSERT INTO `furniture_spring2`.`app_user` (`id_user`, `name_user`, `encryted_password`) VALUES ('1', 'hoanghaibk93@gmail.com', '123456');
INSERT INTO `furniture_spring2`.`app_user` (`id_user`, `name_user`, `encryted_password`) VALUES ('2', 'thitin93@gmail.com', '123456');
INSERT INTO `furniture_spring2`.`user_role` (`id_role`, `id_user`) VALUES ('1', '1');
INSERT INTO `furniture_spring2`.`user_role` (`id_role`, `id_user`) VALUES ('2', '2');
INSERT INTO `furniture_spring2`.`customer` (`id_customer`, `name_customer`, `date_of_birth`, `gender`, `id_card`, `phone_number`, `email`, `address`, `id_user`) VALUES ('1', 'Hoàng Hải', '1993-04-11', 'Nam', '191794571', '0816345671', 'hoanghiabk93@gmail.com', 'Huế', '1');
INSERT INTO `furniture_spring2`.`customer` (`id_customer`, `name_customer`, `date_of_birth`, `gender`, `id_card`, `phone_number`, `email`, `address`, `id_user`) VALUES ('2', 'Thị Tín', '1995-03-12', 'Nử', '1923723523', '0911899572', 'thitin1995@gmail.com', 'Đà Nẳng', '2');
INSERT INTO `furniture_spring2`.`room_type` (`id_room_type`, `name_room_type`) VALUES ('1', 'Phòng khách');
INSERT INTO `furniture_spring2`.`room_type` (`id_room_type`, `name_room_type`) VALUES ('2', 'Phòng ngủ');
INSERT INTO `furniture_spring2`.`room_type` (`id_room_type`, `name_room_type`) VALUES ('3', 'Phòng bếp');

INSERT INTO `furniture_spring2`.`product_type` (`id_product_type`, `name_product_type`) VALUES ('1', 'Bàn');
INSERT INTO `furniture_spring2`.`product_type` (`id_product_type`, `name_product_type`) VALUES ('2', 'Ghế');
INSERT INTO `furniture_spring2`.`product_type` (`id_product_type`, `name_product_type`) VALUES ('3', 'Sofa');
INSERT INTO `furniture_spring2`.`product_type` (`id_product_type`, `name_product_type`) VALUES ('4', 'Giường');
INSERT INTO `furniture_spring2`.`product_type` (`id_product_type`, `name_product_type`) VALUES ('5', 'Kệ');
INSERT INTO `furniture_spring2`.`product_type` (`id_product_type`, `name_product_type`) VALUES ('6', 'Đồ trang trí');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) VALUES ('1', 'Ghế Ăn Gỗ Cao Su Tự Nhiê', 'MOHO', 'Nâu vàng', 'Gỗ cao su tự nhiên', 'Dài 44cm x Rộng 56cm x Cao 81.5', '100', 'Việt Nam', 'Một chiếc bàn nhỏ gọn phù hợp với phong cách đơn giản nhưng đầy tinh', 'Những năm 50 đã nhắn tin - họ đã trở lại. Ghế Svelti mang tính biểu tượng của chúng tôi đặt một góc quay hiện đại vào một thiết kế cổ điển giữa thế kỷ, khiến nó trở thành chiếc ghế trong nhà hoặc ngoài trời hoàn hảo. Đa năng, dễ chăm sóc và cũng dễ dàng cho mắt. Ghế được bán và vận chuyển theo cặp. Giá được hiển thị trên mỗi ghế. 282 / 5000 Một diện mạo hiện đại duyên dáng giữa thế kỷ được đặt trong đá. Chân gỗ chắc chắn được bao phủ bởi một phiến đá cẩm thạch trang nhã để tạo nên vẻ ngoài gọn gàng, nhỏ gọn, hoàn hảo cho không gian nhỏ. Đó là một thiết kế cổ điển sẽ chuyển đổi qua bất kỳ phong cách chỗ ngồi nào. Trộn và kết hợp với bàn gỗ rắn.', 'img/sofa/sofa3/sofa3.1.webp', '990000', '800000', '1', '2');
INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) VALUES ('2', 'Ghế Sofa Gỗ Cao Su Tự Nhiên', 'MOHO', 'Nâu vàng', 'Gỗ cao su tự nhiên, vãi sợi tổng hợp', 'Dài 180cm x Rộng 85cm x Cao 82cm', '250', 'Việt Nam', 'Một chiếc ghế nhỏ gọn phù hợp với phong cách đơn giản nhưng đầy tinh', ' Những năm 50 đã nhắn tin - họ đã trở lại. Ghế Svelti mang tính biểu tượng của chúng tôi đặt một', 'img/news/guong.jpg', '2500000', '2100000', '1', '1');

INSERT INTO `furniture_spring2`.`cart` (`id_cart`, `id_product`, `id_customer`, `quantity`, `date_create`, `status_cart`) VALUES ('1', '1', '1', '3', '2023-06-06', 0 );
INSERT INTO `furniture_spring2`.`cart` (`id_cart`, `id_product`, `id_customer`, `quantity`, `date_create`, `status_cart`) VALUES ('2', '2', '1', '4', '2023-06-17', 0);
INSERT INTO `furniture_spring2`.`cart` (`id_cart`, `id_product`, `id_customer`, `quantity`, `date_create`, `status_cart`) VALUES ('3', '1', '2', '1', '2023-06-16', 1);
INSERT INTO `furniture_spring2`.`cart` (`id_cart`, `id_product`, `id_customer`, `quantity`, `date_create`, `status_cart`) VALUES ('4', '2', '2', '1', '2023-06-16', 1);







