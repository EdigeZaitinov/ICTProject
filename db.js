// "C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath="D:\SIShop\data\db"
// "C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe"
//use SIShop

db.main_categories.insertMany([{
        "_id": 0,
        "name": "Daily"
    },
    {
        "_id": 1,
        "name": "Services"
    },
    {
        "_id": 2,
        "name": "Devices"
    },
    {
        "_id": 3,
        "name": "KBTU"
    }
])

db.minor_categories.insertMany([{
        "_id": 1,
        "name": "Clothes",
        "main_category": "Daily"
    },
    {
        "_id": 2,
        "name": "Dishes",
        "main_category": "Daily"
    },
    {
        "_id": 3,
        "name": "Laptops",
        "main_category": "Devices"
    },
    {
        "_id": 4,
        "name": "Smartphones",
        "main_category": "Devices"
    },
])

db.products.insertMany([{
        "_id": 10,
        "name": 'Ноутбук HP OMEN 17-an137ur черный',
        "photo": 'https://cdn-kaspi.kz/shop/medias/sys_master/images/images/h03/h46/9564482797598/xhp-omen-17-an137ur-black-1306074-1.png.pagespeed.ic.jSbg55EOYa.webp',
        "price": '1000000',
        "description": 'Intel Core i5 8300H 2300 MHz / 17.3" / 3840x2160 / 12 Gb / 1000 Gb HDD / DVD нет / NVIDIA GeForce GTX 1060 / Wi-Fi / Bluetooth / DOS',
        "help": '',
        "productList": 2
    },
    {
        "_id": 11,
        "name": 'Смартфон Samsung Galaxy A10s 2/32Gb черный',
        "photo": 'https://cdn-kaspi.kz/shop/medias/sys_master/images/images/hb2/h30/10602091610142/xsamsung-galaxy-a10s-2-32gb-black-1005100-1.jpg.pagespeed.ic.2hjt0mFlO1.webp',
        "price": '58000',
        "description": '- смартфон на платформе Android поддержка двух SIM  карт экран 6.2 ", разрешение 1520х720 камера 13 + 2 МП,автофокус память 32 Гб,слот для карты памяти объем оперативной памяти 2 Гб 3 G,4 G LTE,Wi - Fi,Bluetooth,GPS аккумулятор 4000 мА⋅ ч ',
        "help": '',
        "productList": 2
    },
    {
        "_id": 12,
        "name": 'Ноутбук Asus X543UB i3 7020U / 4ГБ / 1000HDD / GT110MX 2ГБ / 15.6 / Win10 (X543UB-DM838T)',
        "photo": 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/5/9/5946999aa1cb1396b890814d9c40cf6b80eccdf4_136591_1qwerty.jpg',
        "price": '199000',
        "description": "Диагональ дисплея, дюйм15.6 Серия процессораIntel Core i3Модель процессора7020UОбъём оперативной памяти, ГБ4Объём HDD накопителя, ГБ1000 Модель видеокартыnVidia GeForce 110MXОперационная системаWindows 10",
        "help": '',
        "productList": 2
    },
    {
        "_id": 13,
        "name": 'Ноутбук Asus X541SA Atom x5 E8000 / 4ГБ / 500HDD / 15.6 / Win10 / (X541SA-XO591T)',
        "photo": 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/f/5/f524b26f06bf932877a299c96aa2778d7b63fb2d_165340_1qwerty.jpg',
        "price": '120000',
        "description": 'Диагональ дисплея, дюйм15.6Серия процессораIntel Atom X5Модель процессораE8000Объём оперативной памяти, ГБ4Объём HDD накопителя, ГБ500 Операционная системаWindows 10',
        "help": '',
        "productList": 2
    },
    {
        "_id": 14,
        "name": 'Игровой ноутбук Asus TUF FX505DT Ryzen 5 3550H / 8ГБ / 1000HDD / 15.6 / GTX1650 4ГБ / DOS / (FX505DT-AL115)',
        "photo": 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/2/4/2485e48fd714e611f6a3b490507a63b64af0e290_214668_1asd.jpg',
        "price": '300000',
        "description": 'Диагональ дисплея, дюйм15.6 Серия процессораAMD Ryzen 5Модель процессора3550HОбъём оперативной памяти, ГБ8Объём HDD накопителя, ГБ1000Модель видеокартыnVidia GeForce GTX1650Операционная системаDOS',
        "help": '',
        "productList": 2
    },
    {
        "_id": 15,
        "name": 'Ноутбук Lenovo IdeaPad S130 Pentium N5000 / 4ГБ / 128SSD / 14 / Win10 / (81J200EMRK)',
        "photo": 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/5/5/55e03319a0ac87342c8de52b1531603dc86db9ba_207377_1.jpg',
        "price": '160000',
        "description": 'Диагональ дисплея, дюйм14Серия процессораIntel PentiumМодель процессораN5000Объём оперативной памяти, ГБ4Объём SSD накопителя, ГБ128Операционная системаWindows 10',
        "help": '',
        "productList": 2
    },
    {
        "_id": 16,
        "name": 'Ноутбук Apple MacBook Pro Touch Bar Retina 2019 i5 8257U / 8ГБ / 128SSD / Intel Iris Plus Graphics 645 / 13.3 / Mac OS Mojave / (MUHN2RU/A)1',
        "photo": 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/2/7/272a70e544c5397c6cb69042f6de9d8e55b90a32_171712_1qw.jpg',
        "price": '760000',
        "description": 'Диагональ дисплея, дюйм13.3Серия процессораIntel Core i5Модель процессора8257UОбъём оперативной памяти,ГБ8Объём SSD накопителя,ГБ128Операционная системаMac OS Mojave ',
        "help": '',
        "productList": 2
    },
    {
        "_id": 17,
        "name": 'Игровой ноутбук HP Omen X 2S i7 9750H / 16ГБ / 1000SSD / RTX2070 8ГБ / 15.6 / Win10 / (9PU25EA)',
        "photo": 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/b/a/baf8450b25602db030e4653d0136f9b8a87d975f_215763_1.jpg',
        "price": '1160000',
        "description": 'Диагональ дисплея, дюйм15.6Серия процессораIntel Core i7Модель процессора9750HОбъём оперативной памяти, ГБ16Объём SSD накопителя, ГБ1000Модель видеокартыnVidia GeForce RTX2070Операционная системаWindows 10',
        "help": '',
        "productList": 2
    },
])