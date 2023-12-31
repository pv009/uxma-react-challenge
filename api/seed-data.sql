CREATE TABLE products (id SERIAL PRIMARY KEY, title VARCHAR(255), price DECIMAL(10,2), image_url VARCHAR(255), created_at TIMESTAMP DEFAULT NOW(), updated_at TIMESTAMP DEFAULT NOW());

insert into public.products (title, price, image_url) values ('Lamb - Whole, Fresh', 27.76, 'http://dummyimage.com/226x123.png/5fa2dd/ffffff');
insert into public.products (title, price, image_url) values ('Rice Wine - Aji Mirin', 59.27, 'http://dummyimage.com/173x175.png/5fa2dd/ffffff');
insert into public.products (title, price, image_url) values ('Hand Towel', 58.44, 'http://dummyimage.com/126x120.png/5fa2dd/ffffff');
insert into public.products (title, price, image_url) values ('Cookie Dough - Peanut Butter', 57.36, 'http://dummyimage.com/131x176.png/cc0000/ffffff');
insert into public.products (title, price, image_url) values ('Southern Comfort', 86.32, 'http://dummyimage.com/175x115.png/dddddd/000000');
insert into public.products (title, price, image_url) values ('Port - 74 Brights', 30.05, 'http://dummyimage.com/109x171.png/dddddd/000000');
insert into public.products (title, price, image_url) values ('Tequila Rose Cream Liquor', 94.71, 'http://dummyimage.com/233x229.png/ff4444/ffffff');
insert into public.products (title, price, image_url) values ('Pastry - Banana Tea Loaf', 22.35, 'http://dummyimage.com/208x247.png/ff4444/ffffff');
insert into public.products (title, price, image_url) values ('Lid Coffeecup 12oz D9542b', 85.48, 'http://dummyimage.com/112x102.png/cc0000/ffffff');
insert into public.products (title, price, image_url) values ('Puree - Strawberry', 24.4, 'http://dummyimage.com/228x179.png/dddddd/000000');
insert into public.products (title, price, image_url) values ('Ostrich - Prime Cut', 33.54, 'http://dummyimage.com/248x238.png/cc0000/ffffff');
insert into public.products (title, price, image_url) values ('Ecolab - Hobart Washarm End Cap', 83.17, 'http://dummyimage.com/235x233.png/cc0000/ffffff');
insert into public.products (title, price, image_url) values ('Lettuce - Spring Mix', 8.09, 'http://dummyimage.com/212x208.png/5fa2dd/ffffff');
insert into public.products (title, price, image_url) values ('Butter Ripple - Phillips', 88.95, 'http://dummyimage.com/181x182.png/5fa2dd/ffffff');
insert into public.products (title, price, image_url) values ('Orange Roughy 6/8 Oz', 57.41, 'http://dummyimage.com/230x150.png/dddddd/000000');
insert into public.products (title, price, image_url) values ('Rosemary - Dry', 25.89, 'http://dummyimage.com/206x163.png/ff4444/ffffff');
insert into public.products (title, price, image_url) values ('Beer - Muskoka Cream Ale', 33.19, 'http://dummyimage.com/218x214.png/5fa2dd/ffffff');
insert into public.products (title, price, image_url) values ('Rice - Wild', 76.56, 'http://dummyimage.com/129x151.png/cc0000/ffffff');
insert into public.products (title, price, image_url) values ('Vector Energy Bar', 82.87, 'http://dummyimage.com/136x178.png/dddddd/000000');
insert into public.products (title, price, image_url) values ('Wine - Acient Coast Caberne', 63.22, 'http://dummyimage.com/114x122.png/5fa2dd/ffffff');