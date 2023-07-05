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
INSERT INTO `furniture_spring2`.`customer` (`id_customer`, `name_customer`, `date_of_birth`, `gender`, `id_card`, `phone_number`, `email`, `address`, `id_user`) VALUES ('3', 'Ánh Phúc', '1999-04-03', 'Nử', '191787534', '0911672534', 'anhPhuc1998@gmail.com', 'DN', '3');

INSERT INTO `furniture_spring2`.`room_type` (`id_room_type`, `name_room_type`) VALUES ('1', 'Phòng khách');
INSERT INTO `furniture_spring2`.`room_type` (`id_room_type`, `name_room_type`) VALUES ('2', 'Phòng ngủ');
INSERT INTO `furniture_spring2`.`room_type` (`id_room_type`, `name_room_type`) VALUES ('3', 'Phòng bếp');

INSERT INTO `furniture_spring2`.`product_type` (`id_product_type`, `name_product_type`) VALUES ('1', 'Bàn');
INSERT INTO `furniture_spring2`.`product_type` (`id_product_type`, `name_product_type`) VALUES ('2', 'Ghế');
INSERT INTO `furniture_spring2`.`product_type` (`id_product_type`, `name_product_type`) VALUES ('3', 'Tủ');
INSERT INTO `furniture_spring2`.`product_type` (`id_product_type`, `name_product_type`) VALUES ('4', 'Giường');
INSERT INTO `furniture_spring2`.`product_type` (`id_product_type`, `name_product_type`) VALUES ('5', 'Kệ');
INSERT INTO `furniture_spring2`.`product_type` (`id_product_type`, `name_product_type`) VALUES ('6', 'Đồ trang trí');

-- INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) VALUES ('1', 'Ghế Ăn Gỗ Cao Su Tự Nhiê', 'MOHO', 'Nâu vàng', 'Gỗ cao su tự nhiên', 'Dài 44cm x Rộng 56cm x Cao 81.5', '100', 'Việt Nam', 'Một chiếc bàn nhỏ gọn phù hợp với phong cách đơn giản nhưng đầy tinh', 'Những năm 50 đã nhắn tin - họ đã trở lại. Ghế Svelti mang tính biểu tượng của chúng tôi đặt một góc quay hiện đại vào một thiết kế cổ điển giữa thế kỷ, khiến nó trở thành chiếc ghế trong nhà hoặc ngoài trời hoàn hảo. Đa năng, dễ chăm sóc và cũng dễ dàng cho mắt. Ghế được bán và vận chuyển theo cặp. Giá được hiển thị trên mỗi ghế. 282 / 5000 Một diện mạo hiện đại duyên dáng giữa thế kỷ được đặt trong đá. Chân gỗ chắc chắn được bao phủ bởi một phiến đá cẩm thạch trang nhã để tạo nên vẻ ngoài gọn gàng, nhỏ gọn, hoàn hảo cho không gian nhỏ. Đó là một thiết kế cổ điển sẽ chuyển đổi qua bất kỳ phong cách chỗ ngồi nào. Trộn và kết hợp với bàn gỗ rắn.', 'img/sofa/sofa3/sofa3.1.webp', '990000', '800000', '1', '2');
-- INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) VALUES ('2', 'Ghế Sofa Gỗ Cao Su Tự Nhiên', 'MOHO', 'Nâu vàng', 'Gỗ cao su tự nhiên, vãi sợi tổng hợp', 'Dài 180cm x Rộng 85cm x Cao 82cm', '250', 'Việt Nam', 'Một chiếc ghế nhỏ gọn phù hợp với phong cách đơn giản nhưng đầy tinh', ' Những năm 50 đã nhắn tin - họ đã trở lại. Ghế Svelti mang tính biểu tượng của chúng tôi đặt một', 'img/news/guong.jpg', '2500000', '2100000', '1', '1');
INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('1', 'Bàn ăn gỗ Pio mẫu 2', 'Pio', 'Màu gỗ nâu trắng', 'Gỗ dẻ gai, mặt melamine vân cẩm thạch', 'D1800-R1000-C750', '20', 'Việt Nam', 'Bàn ăn gỗ Pio được yêu thích với mặt bàn được làm từ chất liệu melamine marble màu trắng sang trọng cùng những vân đá độc đáo.', 'Bàn ăn Pio là lựa chọn tối ưu cho những không gian phòng ăn mang đậm phong cách Bắc Âu. Thiết kế dạng oval và phần chân thon gọn giúp tiết kiệm không gian phòng ăn.', 'img/ban/ban01.jpg', '1300000', '1250000', '1', '3');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('2', 'Bàn làm việc Kate', 'Kate', 'Màu trắng', 'Gỗ sồi sơn trắng lấy ghim', 'D1500 - R500 - C750', '20', 'Việt Nam', 'Bàn làm việc Kate mang phong cách bán cổ điển với màu trắng nhẹ nhàng như tô điểm cho không gian thêm sáng.', 'Bàn Kate được làm bằng gỗ sồi sơn lấy ghim giúp người sử dụng vẫn cảm nhận được từng thớ gỗ', 'img/ban/ban02.jpg', '1320000', '1270000', '1', '1');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('3', 'Bàn nước Wire Brass Large ', 'Wire Brass Large', 'Màu gold', 'thép sơn tĩnh điện, kính cường lực', 'D700-R700-C550', '25', 'Việt Nam', 'Bàn nước Wire Brass Large với vẻ ngoài sang trọng, sản phẩm rất phù hợp với không gian căn hộ hiện đại.', 'Bàn nước Wire Brass Large là sự kết hợp tinh tế giữa phần khung kim loại màu gold và mặt kính cường lực bền và sang trọng', 'img/ban/ban03.jpg', '2200000', '2000000', '1', '1');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('4', 'Bàn đầu giường Pio', 'Pio', 'Màu nâu xám', 'Gỗ Beech+ MDF Veneer thông', 'D500- R400 - C550', '10', 'Việt Nam', 'Một sản phẩm cộng thêm cho phòng ngủ của bạn. Bàn đầu giường Pio giúp tạo điểm nhấn và công năng.', ' Hoàn thiện với màu nâu xám và điểm xuyến với màu ghi tạo tổng thể hài hòa. PIO thể hiện lối sống của những người trẻ, biết chiêm nghiệm và thưởng ngoạn sự trở về bình yên giữa nhịp sống hiện đại.Thiết kế bởi những đường cong, điểm xuyến các chi tiết nhấn nhá bên cạnh sử dụng các vật liệu như gỗ beech, melamine marble.. giúp PIO trở nên cá tính và thu hút trong không gian hiện đại', 'img/ban/ban04.jpg', '4500000', '4000000', '1', '2');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('5', 'Bàn ăn mở rộng Tivoli', 'Tivoli', 'Màu nâu gỗ', 'Chân khung kim loại sơn lacquer - Mặt gỗ + mdf veneer màu smoke', 'D1300/1900 - R1300 - C750', '15', 'Việt Nam', 'Một thiết kế bàn ăn hiện đại cho không gian của bạn.', 'Bàn ăn mở rộng Tivoli được nhập khẩu từ thương hiệu nổi tiếng Calligaris của Ý với thiết kế đế bằng kim loại gồm 4 chân hình chữ V lồng vào nhau, mặt bàn ceramic dán kính cường lựccó độ bền cao, chống trầy, chống thấm bẩn, dễ lau chùi, chịu nhiệt, chịu va đập tốt.', 'img/ban/ban05.jpg', '5500000', '5500000', '1', '3');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('6', 'Bàn console Paradise', 'Paradise', 'Màu gold', 'Chân inox mạ màu gold, mặt đá vân', 'D1200 -R400-C820 mm', '25', 'Việt Nam', 'Bàn console Paradise là thiết kế phù hợp với căn hộ hiện đại.', 'Bàn console Paradise có vẻ ngoài độc đáo với thiết kế uốn lượn ở phần chân bàn. Mặt bàn đá với những đường vân cách điệu đầy tinh tế. Khung kim loại màu gold giúp gia tăng nét sang trọng cho không gian.', 'img/ban/ban06.jpg', '2500000', '2500000', '1', '1');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('7', 'Sofa Dax Everest 3', 'Everest', 'Màu vàng', 'Khung gỗ bọc vải', 'D2100 - R900 - C740mm', '10', 'Việt Nam', 'Sofa Dax Everest 3 một thiết kế phù hợp với không gian phòng khách hiện đại cho gia đình bạn.', 'Sofa Dax Everest 3 là dòng ghế sofa đẹp cao cấp, được thiết kế theo phong cách châu âu sang trọng và tinh tế, nhưng vẫn đảm bảo về công năng sử dụng. Thiết kế khung gỗ bọc vải chất lượng cao, bền màu, không xổ lông.', 'img/ge/ghe01.jpg', '3500000', '3500000', '2', '1');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('8', 'Armchair MB23-03', 'Everest', 'Màu xám', 'Khung gỗ bọc vải', 'D770 - R780 - C790 mm', '10', 'Việt Nam', 'Armchair MB23-03 một thiết kế phù hợp với không gian phòng khách hiện đại cho gia đình bạn.', 'Armchair MB23-03 mang phong cách Châu Âu hiện đại được thiết kế từ khung gỗ tần bì chắc chắn, sử dụng nệm mút cao cấp và bọc vải nỉ nhập khẩu, đảm bảo độ bền khung ghế cao', 'img/ge/ghe02.jpg', '2500000', '2100000', '2', '1');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('9', 'Ghế ăn không tay Elegance ', 'Elegance', 'Màu đen', 'Gỗ Ash, dây thừng cao cấp', 'D430 - R505 - C790 mm', '50', 'Việt Nam', 'Ghế Elegance với thiết kế tối giản sẽ mang đến không gian ấm cúng và trang nhã.', 'Ghế Elegance được làm từ gỗ Tần bì Mỹ. Bề mặt ngồi được thiết kế tỉ mỉ với sự đan xen của những sợi dây thừng cao cấp nhập khẩu từ Đức. Với đặc điểm chống nước tốt cùng khả năng đàn hồi cao, sản phẩm hứa hẹn sẽ đem lại trải nghiệm thú vị cho người dùng. Phần lưng tựa uốn cong nhẹ nhàng cho người dùng một tư thế ngồi thoải mái.', 'img/ge/ghe03.jpg', '1500000', '1400000', '2', '3');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('10', 'Ghế Franky', 'Jazz', 'Màu da nâu', 'Chân kim loại + bọc da tổng hợp', 'D560 - R460 - C830', '50', 'Việt Nam', 'Ghế Franky được nhập khẩu có kiểu dáng thanh mảnh sở hữu vẻ đẹp hiện đại theo sang trọng.', 'Ghế Franky với phần chân ghế từ kim loại bền bỉ chắc chắn, phần nệm bọc da êm ái sang trọng và đầy cá tính. Phần lưng tựa uốn cong nhẹ nhàng cho người dùng một tư thế ngồi thoải mái.', 'img/ge/ghe04.jpg', '2800000', '2600000', '2', '1');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('11', 'Ghế bar Monaco', 'Monaco', 'Màu nâu', 'Kim loại không rỉ, da công nghiệp', 'D480- C1000 mm', '30', 'Việt Nam', 'Ghế bar Monaco được thiết kế gồm 2 tầng với phong cách hiện đại, trẻ trung mang đến không gian nhà sang trọng, lãng mạn.', 'Ghế bar Monaco có kết cấu vững chắc, mạnh mẽ với khung ghế làm từ kim loại không gỉ cao cấp, chắc chắn giúp ghế luôn chịu được mọi tác động xấu từ môi trường bên ngoài, tăng tuổi thọ cho sản phẩm; Đệm và tựa ghế được bao bọc bởi lớp đệm da cao cấp, tăng sự thoải mái, êm ái, dễ chịu cho khách hàng khi ngồi.Với sản phẩm Ghế bar Monaco bạn có thể tự điều chỉnh độ cao thấp của ghế phù hợp với vóc dáng mình rất tiện lợi.', 'img/ge/ghe05.jpg', '3800000', '3500000', '2', '3');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('12', 'Ghế thư giãn Lazboy', 'Lazboy', 'Màu da bò', 'Khung gỗ cao su bọc da bò tự nhiên cao cấp', 'D950 - R850 - C1030 mm', '10', 'Việt Nam', 'Ghế thư giãn Lazboy là sự lựa chọn cho những phút giây thư giãn sau một ngày dài hoạt động của bạn', 'Ghế thư giãn của thương hiệu nối tiếng Lazboy của Mỹ được làm bằng khung gỗ xà cừ bọc da, cấu trúc ghế chắc chắn nâng đỡ cơ thể ở các trạng thái ngồi và nằm. Thiết kế sang trọng rất phù hợp cho không gian thư giãn của bạn', 'img/ge/ghe06.jpg', '6800000', '6500000', '2', '2');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('13', 'Tủ tivi Brooklyn', 'Brooklyn', 'Màu trắng', 'Gỗ Cao su, MDF sơn lacquer', 'D1450 - R500 - C500 mm', '10', 'Việt Nam', 'Tủ tivi Brooklyn là sự lựa chọn hoàn hảo với thiết kế hiện đại phù hợp với mọi không gian phòng khách gia đình, văn phòng', 'Tủ Tivi Brooklyn Chất liệu gỗ cao su mang đến cho sản phẩm một vẻ ngoài chắc chắn và bền bỉ. Tông màu trắng tao nhã sẽ gia tăng nét sang trọng cho không gian phòng khách hiện đại.', 'img/tu/tu01.jpg', '3800000', '3500000', '3', '1');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('14', 'Tủ bếp cao AA Gallery', 'Gallery', 'Màu gỗ', 'Laminate - gỗ MDF - Kính', 'D4400 - R600 - C2400mm', '15', 'Việt Nam', 'Một chiếc tủ bếp cao cấp cho không gian phòng bếp gọn gàng, đầy sang trọng', 'Tủ bếp cao AA Galleryc được làm từ gỗ tự nhiên, chia nhiều ngăn chứa đồ phù hợp và tiện ích. Bày trí khoa học và hợp lý với nơi chứa đồ rộng rãi. Đặc biệt phù hợp với không gian ăn của gia đình và căn hộ.', 'img/tu/tu02.jpg', '4800000', '4500000', '3', '3');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('15', 'Tủ áo Harmony', 'Harmony', 'Màu trắng', 'Gỗ sồi+ tràm, MDF sơn trắng', 'D980 - R630 - C1980', '15', 'Việt Nam', 'Một chiếc tủ với thiết kế đơn giản tinh tế cho bạn', 'Là sự kết hợp của màu trắng tinh khôi với màu gỗ ấm áp trên nền những đường nét thiết kế hiện đại, trang nhã. Harmony được đánh giá rất cao cả về kiểu dáng và công năng, đó sẽ là niềm tự hào của gia chủ khi khách đến thăm nhà.', 'img/tu/tu03.jpg', '2800000', '2500000', '3', '2');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('16', 'Tủ ly Blue', 'Blue', 'Màu gỗ', 'Gỗ sồi - MDF veneer sồi', 'D900 - R480 - C2000', '15', 'Việt Nam', 'Tủ ly Blue có kiểu dáng đơn giản nhưng tinh tế, sang trọng', 'Sản phẩm được làm bằng chất liệu gỗ Sồi đánh cước giúp tôn lên những đường vân gỗ tự nhiên, mộc mạc, tạo nên nét đẹp đặc trưng cho sản phẩm. Với khả năng kháng mối mọt ẩm mốc tự nhiên tốt, đảm bảo tuổi thọ lên tới > 50 năm, phục vụ khách hàng trong suốt thời gian dài mà vẫn đảm bảo được chất lượng. ', 'img/tu/tu04.jpg', '3800000', '3500000', '3', '3');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('17', 'Tủ hộc kéo Pio', 'Pio', 'Màu nâu xám + ghi', 'Gỗ Beech+ MDF Veneer thông', 'D1400-R450-C900', '15', 'Việt Nam', 'Tủ hộc kéo Pio giúp cất trữ tối ưu cho những đồ đạc trong phòng ngủ của bạn.', 'Những ngăn kéo được thiết kế rộng rãi, kiểu dáng lạ tạo những góc nhìn mới mẻ và duyên dáng. Tủ hộc kéo Pio hoàn thiện với màu nâu xám kết hợp với màu ghi. PIO thể hiện lối sống của những người trẻ, biết chiêm nghiệm và thưởng ngoạn sự trở về bình yên giữa nhịp sống hiện đại.Thiết kế bởi những đường cong, điểm xuyến các chi tiết nhấn nhá bên cạnh sử dụng các vật liệu như gỗ beech, melamine marble.. giúp PIO trở nên cá tính và thu hút trong không gian hiện đại.', 'img/tu/tu05.jpg', '1800000', '1500000', '3', '2');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('18', 'Tủ giày Chio', 'Chio', 'Màu trắng', 'Gỗ xà cừ (Mahogany)- MDF veneer sơn trắng', 'D1200 - R370 - C830', '15', 'Việt Nam', 'Một chiếc tủ với Với thiết kế gọn gàng, sang trọng, tủ giày Chio sẽ góp phần làm cho gian ngôi nhà của bạn trở nên ngăn nắp và gọn gàng nhưng không thiếu phần hiện đại hơn.', ' Kiểu dáng hiện đại 2 cánh mở là mẫu nội thất gia dụng mẫu mã trẻ trung rất được ưa chuộng trên thị trường hiện nay. Sản phẩm được làm từ Gỗ xà cừ (Mahogany)- MDF veneer sơn trắng với phần lõi chống ẩm và chống thấm cực tốt, tăng tuổi thọ và độ bền bỉ cho tủ. Bề mặt phủ thêm lớp melamine màu trắng chống trầy xước và chống dính. Tiện lợi cho việc vệ sinh, bảo quản, dọn dẹp cho người sử dụng.', 'img/tu/tu06.jpg', '2800000', '2500000', '3', '1');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('19', 'Giường ngủ bọc vải Skagen', 'Skagen', 'Màu gỗ + trắng chấm bi', 'Gỗ Walnut + Vải cao cấp nhập khảu Pháp', 'D2000 - R1600 - C930', '15', 'Việt Nam', 'Giường ngủ bọc vải Skagen 1m6 màu 80345 nổi bật cho phòng ngủ theo phong cách Bắc Âu.', ' Với thiết kế Đầu giường bo cong bọc vải mềm mại như thể hiện sự chào đón bạn với vòng tay rộng mở và giường ngủ được hoàn thiện từ chất liệu gỗ cao cấp, có khả năng chống nước tốt, độ chịu lực cao. Là sản phẩm trong bộ sưu tập Skagen, giường ngủ Skagen phù hợp với những phòng ngủ có diện tích lớn.', 'img/giuong/giuong01.jpg', '6800000', '6500000', '4', '2');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('20', 'Giường hộc kéo Penny', 'Penny', 'Màu ghi', 'Khung gỗ MFC, bọc da PU', 'D2000 - R1800 - C1110', '15', 'Việt Nam', 'Giường hộc kéo Penny chắc chắn sẽ là sự lựa chọn tối ưu cho không gian phòng ngủ hiện đại.', 'Giường hộc kéo Penny với điểm nổi bật là bốn ngăn chứa đồ rộng thuận tiện cất những vật dụng trong phòng ngủ như gối, mền, drap hết sức gọn gàng. Thiết kế hộc kéo tiện lợi, nâng cao khả năng chịu lực cho kết cấu, tăng sự ổn định và bền vững cho sản phẩm.Giường ngủ được hoàn thiện từ chất liệu gỗ MFC cao cấp, gỗ có khả năng chống nước tốt, độ chịu lực cao.Giường hộc kéo Penny có 2 kích thước 1m6 và 1m8, đa dạng màu sắc.Giường hộc kéo Penny có 2 kích thước 1m6 và 1m8, đa dạng màu sắc.', 'img/giuong/giuong02.jpg', '7800000', '7500000', '4', '2');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('21', 'Giường ngủ bọc vải Pio 1m8 màu LIVE KD103', 'Pio', 'Màu xanh', 'Gỗ Beech, bọc vải', 'D2000- R1800- C1000 mm', '15', 'Việt Nam', 'Giường Pio là một lựa chọn sáng giá cho không gian phòng ngủ Bắc Âu- Hiện đại', 'Giường ngủ bọc vải Pio 1m8 được thiết kế bọc vải hoàn toàn với khung gỗ beech chắc chắn. Những chi tiết nhấn nhá tại đầu giường, gối đầu giường giúp nó trở nên lạ mắt và ấn tượng. Sử dụng chân thon gọn giúp phòng ngủ của bạn trở nên thông thoáng và thanh lịch hơn. Với 2 kích thước lựa chọn: 1m6, 1m8, có các màu vải khác nhau để lựa chọn.', 'img/giuong/giuong03.jpg', '7800000', '7500000', '4', '2');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('22', 'Giường ngủ gỗ Shadow 1m8', 'Shadow', 'Màu nâu gỗ', 'Chân kim loại màu đồng + MDF Veneer sồi', 'D2000- R1800- C1080', '15', 'Việt Nam', 'Giường Shadow là một lựa chọn sáng giá cho không gian phòng ngủ hiện đại.', 'Giường ngủ gỗ Shadow 1m8 là sự kết hợp từ những chất liệu đặc sắc và độ bền cao: ván MDF chống ẩm cao cấp được phủ một lớp gỗ sồi Hitech Veneer cùng với phần chân sắt làm từ hợp kim thép.', 'img/giuong/giuong04.jpg', '1800000', '1600000', '4', '2');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('23', 'Giường Dubai 1.6M', 'Dubai', 'Màu nâu gỗ', 'Khung - Chân gỗ beech - Vải', 'D2000 - R1600 - C1200 mm', '15', 'Việt Nam', 'Giường Dubai 1.6M vải MB LA141/28D với tông màu trang nhã giúp không gian phòng ngủ thêm phần sang trọng và hiện đại.', 'Với thiết kế Chân gỗ beech mang lại cảm giác chắc chắn cùng lớp vải bọc êm ái, cho người dùng trải nghiệm thư thái nhất. Phần chân giường được thiết kế cao, khoảng cách vừa đủ để bạn dễ dàng vệ sinh mỗi ngày. Giường Dubai hướng tới không gian thoáng đãng với kết cấu tối giản, mang lại cho người dùng cảm giác nhẹ nhàng và thoải mái.', 'img/giuong/giuong04.jpg', '14000000', '13500000', '4', '2');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('24', 'Kệ kim loại đen 6 tầng', 'Kaizen', 'Màu đen', 'Kim loại', 'D1010 - R390 - C1850 mm', '15', 'Việt Nam', 'Một chiếc kệ được thiết kế với các đường nét khỏe khoắn, chắc chắn, uốn lượn tạo nên không gian bắt mắt hơn.', 'Với thiết kế khung kim loại phủ sơn mạ đen chống gỉ. Với kết cấu vững chắc cũng vẻ bắt mắt của mình, kệ trang trí mang đến sự hiện đại cho không gian. Kệ giúp chứa các đồ vật như sách báo, tài liệu, đồ decor mang lại vẻ đẹp hoàn hảo và sự gọn gàng cho không gian.', 'img/ke/ke01.jpg', '8000000', '7500000', '5', '1');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('25', 'Kệ trưng bày Hangar', 'Hangar', 'Màu đen', 'Kim loại sơn màu đen+ MDF veneer', 'D1130 - R400 - C2000 mm', '10', 'Việt Nam', 'Một chiếc kệ được thiết kế với các đường nét khỏe khoắn, chắc chắn,tạo nên không gian gọn gàng.', 'Với thiết kế khung kim loại phủ sơn mạ đen chống gỉ kết hợp mặt gỗ cao cấp. Với kết cấu chắc chắn, kích thước lớn kệ giúp chứa các đồ vật như sách báo, tài liệu, đồ decor mang lại vẻ đẹp hoàn hảo và sự gọn gàng cho không gian.', 'img/ke/ke02.jpg', '18000000', '17500000', '5', '1');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('26', 'Kệ Sách Brem ', 'Brem', 'Màu Trắng', 'MFC sơn lacquer', 'D800-R430-C2000 mm', '10', 'Việt Nam', 'Một chiếc kệ sách được thiết kế tinh tế rất phù hợp cho không gian hiện đại nhà bạn', 'Kệ sách Brem là dòng sản phẩm cao cấp. Kệ sử dụng vật liệu MFC cao cấp chống ẩm, đạt chuẩn an toàn châu Âu, hoàn thiện sơn lacquer. Phần kệ kính cường lực 10mm có thể điều chỉnh độ cao tùy ý. Có thể kết hợp với đồ nội thất khác tạo thành vách ngăn mở cho không gian.', 'img/ke/ke03.jpg', '18000000', '17500000', '5', '1');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('27', 'Kệ treo tường Natura', 'Natura', 'Màu gỗ', 'MDF Veneer Oak', 'D1100 - R230 -C220 mm', '10', 'Việt Nam', 'Một chiếc kệ sách được thiết kế đơn giản, độc đáo giúp cho không gian ngôi nhà bạn trở nên ngăn nắp và nghệ thuật hơn gấp nhiều lần.', 'Kệ trang trí treo tường với thiết kế đơn giản, tiện dụng với kích thước nhỏ gọn, phù hợp với mọi không gian từ phòng khách, phòng làm việc, phòng ngủ, hàng lang cho đến cầu thang. Chất kiệu gỗ cao cấp MDF thiện môi trường, bề mặt phủ melamine có khả năng chống ẩm, chống trầy xước cao. Kệ có kết cấu chắc chắn chịu lực tốt và tuổi thọ cao.  Được sử dụng để chứa sách, đồ trang trí, chậu cây, khung hình, lọ hoa mà bạn yêu thích. Giúp tạo nên sự ấn tượng riêng cho không gian của bạn.', 'img/ke/ke04.jpg', '11000000', '10500000', '5', '1');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('28', 'Kệ sách Rap', 'Rap', 'Màu gỗ', 'Chân inox màu gold -gỗ ACACIA (tràm ) + mdf veneer tràm', 'D1200 - R400 - C1800 mm', '10', 'Việt Nam', 'Một chiếc kệ sách được thiết kế đơn giản, sang trọng giúp cho không gian ngôi nhà bạn trở nên ngăn nắp và nghệ thuật hơn.', 'Với thiết kế khung kim loại phủ sơn màu gold kết hợp mặt gỗ cao cấp mang đến vẽ sang trọng và hiện đại. Với kết cấu chắc chắn, kích thước gọn gàng. Được sử dụng để chứa sách, đồ trang trí, chậu cây, khung hình, lọ hoa mà bạn yêu thích. Giúp tạo nên sự ấn tượng riêng cho không gian của bạn.', 'img/ke/ke05.jpg', '8000000', '7500000', '5', '1');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('29', 'Đèn bàn Savona', 'Savona', 'Màu trắng', 'Thân gốm, chụp vải', 'D260 - R580 - C660 mm', '10', 'Việt Nam', 'Một chiếc đèn với thiết kế tinh xảo thêm điểm nhấn cho không gian nhà bạn', 'Với thiết kế đế đèn bằng sứ trắng có chạm khắc hình xoắn ốc. Vẻ ngoài đặc biệt của nó được thể hiện bởi đế đèn hoàn thiện bằng đồng cổ và một chao đèn màu kem đơn giản. Chụp đèn bằng chất liệu vải cao cấp mang đến độ bền cao. Ánh đèn vàng sẽ đem đến cho không gian bạn sự ấm cúng.', 'img/dotrangtri/den01.jpg', '9000000', '8500000', '6', '2');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('30', 'Thảm Hilton', 'Hilton', 'Màu xám + vàng', 'Decolan-Polyester', 'D2900-R2000-C10 mm', '10', 'Việt Nam', 'Thảm trang trí phòng khách, phòng ngủ ngoài công năng sử dụng còn là một vật dụng nội thất giúp gia tăng tính thẩm mỹ, phong cách trong không gian của gia đình bạn.', 'Với chất liệu sợi tổng hợp dùng công nghệ dệt điểm Châu Âu đạt tiêu chuẩn chất lượng cao. Thảm sử dụng để trang trí đa dạng phòng khách hoặc phòng ngủ với họa tiết màu sắc ấn tượng và rất đẹp sang trọng. Phù hợp với mọi thiết kế với nhiều đồ dùng nội thất khác nhau tạo nên phong cách ấn tượng và hài hòa cho không gian phòng khách hoặc phòng ngủ', 'img/dotrangtri/tham01.jpg', '8000000', '7500000', '6', '1');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('31', 'Đèn bàn Pila Euca', 'Pila', 'Màu xám + xanh', 'Thân kim loại, chụp vải', 'D400 - R400 - C500 mm', '15', 'Việt Nam', 'Một chiếc đèn với thiết kế tinh xảo, màu sắc hiện đại thêm điểm nhấn cho không gian nhà bạn', 'Với thiết kế đế đèn bằng kim lại không gỉ bền chắc. Chụp đèn bằng chất liệu vải cao cấp mang đến độ bền cao với tông màu nổi bật. Ánh đèn vàng sẽ đem đến cho không gian bạn sự ấm cúng không kém phần hiện đại.', 'img/dotrangtri/den02.jpg', '7000000', '6700000', '6', '2');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('32', 'Quả địa cầu vàng lớn 15726J', 'Pila', 'Màu vàng + trắng', 'Thân kim loại, quả nhựa tổng hợp', 'D315 - R255 - C475 mm', '11', 'Việt Nam', 'Đồ decor địa cầu làm đồ trang trí văn phòng làm việc giúp không gian thêm phần sinh động đồng thời khẳng định trí thông minh, tầm nhìn rộng lớn của doanh nhân hay những người lãnh đạo.', 'Thiết kế sang trọng sáng tạo mở rộng tầm nhìn với phần khung bằng kim loại mạ màu gold, quả địa cầu làm từ nhựa tổng hợp nhẹ và bền chắc. Một sản phẩm trang trí mang đến không gian thông thái thể hiện tri thức của gia chủ.', 'img/dotrangtri/quadiacau.jpg', '5000000', '4700000', '6', '1');

INSERT INTO `furniture_spring2`.`product` (`id_product`, `name_product`, `brand`, `color`, `material`, `size`, `quantity`, `country_of_origin`, `introduce`, `description`, `image`, `original_price`, `sale_price`, `id_product_type`, `id_room_type`) 
VALUES ('33', 'Bộ 2 tượng chặn sách Bookend hình con ngựa', 'Bookend', 'Màu trắng + vàng', 'nhôm', 'D156-R127-C290 mm', '5', 'Việt Nam', 'Một sản phẩm làm đồ trang trí văn phòng làm việc giúp không gian thêm phần sinh động, mang lại ấn tượng cá nhân riêng biệt.', 'Chất liệu bằng nhôm chắc chắn,bền đẹp. Bộ 2 tượng chặn sách Bookend hình con ngựa không chỉ dùng bảo quản sách tốt hơn, tránh tình trạng bị cong gáy, rách bìa mà còn là một sản phẩm decor đầy phong cách và sáng tạo.', 'img/dotrangtri/bochansach.jpg', '7000000', '6700000', '6', '1');

UPDATE `furniture_spring2`.`product` SET `sale_price` = '1320000' WHERE (`id_product` = '2');
UPDATE `furniture_spring2`.`product` SET `sale_price` = '4500000' WHERE (`id_product` = '4');
UPDATE `furniture_spring2`.`product` SET `sale_price` = '1500000' WHERE (`id_product` = '9');
UPDATE `furniture_spring2`.`product` SET `sale_price` = '3800000' WHERE (`id_product` = '11');
UPDATE `furniture_spring2`.`product` SET `sale_price` = '3800000' WHERE (`id_product` = '13');
UPDATE `furniture_spring2`.`product` SET `sale_price` = '3800000' WHERE (`id_product` = '16');
UPDATE `furniture_spring2`.`product` SET `original_price` = '2500000' WHERE (`id_product` = '18');
UPDATE `furniture_spring2`.`product` SET `sale_price` = '7800000' WHERE (`id_product` = '20');
UPDATE `furniture_spring2`.`product` SET `sale_price` = '1800000' WHERE (`id_product` = '22');
UPDATE `furniture_spring2`.`product` SET `sale_price` = '18000000' WHERE (`id_product` = '25');
UPDATE `furniture_spring2`.`product` SET `sale_price` = '8000000' WHERE (`id_product` = '28');
UPDATE `furniture_spring2`.`product` SET `sale_price` = '7000000' WHERE (`id_product` = '31');

INSERT INTO `furniture_spring2`.`cart` (`id_cart`, `id_product`, `id_customer`, `quantity`, `date_create`, `status_cart`) VALUES ('1', '1', '1', '3', '2023-06-06', 0 );
INSERT INTO `furniture_spring2`.`cart` (`id_cart`, `id_product`, `id_customer`, `quantity`, `date_create`, `status_cart`) VALUES ('2', '2', '1', '4', '2023-06-17', 0);
INSERT INTO `furniture_spring2`.`cart` (`id_cart`, `id_product`, `id_customer`, `quantity`, `date_create`, `status_cart`) VALUES ('3', '1', '2', '1', '2023-06-16', 1);
INSERT INTO `furniture_spring2`.`cart` (`id_cart`, `id_product`, `id_customer`, `quantity`, `date_create`, `status_cart`) VALUES ('4', '2', '2', '1', '2023-06-16', 1);
select * from product where original_price > sale_price order by id_product desc;

-- select pr.name_product, pr.brand, pr.color, pr.material, pr.size, pr.quantity, pr. sum(quantity_order) as total from product pr
-- inner join order_detail od on od.id_product = pr.id_product
-- group by od.id_product
-- order by total desc
SELECT pr.*
FROM product pr
JOIN (
  SELECT id_product, SUM(quantity_order) AS total_quantity_order
  FROM order_detail
  GROUP BY id_product
) order_totals
ON order_totals.id_product = pr.id_product
ORDER BY order_totals.total_quantity_order DESC;

select pr.name_product, pr.image, pr.sale_price, od.quantity_order, od.id_order from product pr
inner join order_detail od on od.id_product = pr.id_product
inner join orders ors on od.id_order = ors.id_order
where od.id_order = 45





