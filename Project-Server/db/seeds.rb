
puts "Creating Brands ... "
air_jordan=Brand.create(brand_name: "Air Jordan")
adidas=Brand.create(brand_name: "Adidas")
nike=Brand.create(brand_name: "Nike")
vans=Brand.create(brand_name: "Vans")

puts "Creating Shoes..."

concord=Shoe.create(brand_id: air_jordan.id, nickname: "Concord", color: "White/Black", price: 200, size:13, function: "Basketball", image_url: "https://sneakernews.com/wp-content/uploads/2018/10/jordan-11-concord-shoes-white-black-0.jpg")
presto=Shoe.create(brand_id: nike.id, nickname: "Presto", color: "Multi", price: 150, size: 8, function_id: "Tennis", image_url: "https://images.stockx.com/images/Nike-Air-Presto-Hello-Kitty-2022-PS.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1651604445&q=75")
nmd=Shoe.create(brand_id: adidas.id, nickname: "NMD", color: "Black", price: 110, size: 10, function: "Everyday Use", image_url: "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_449429_al&qlt=85&qlt=92&w=320&h=320&v=1&fmt=auto")
sk8_hi=Shoe.create(brand_id: vans.id, nickname: "Sk8-Hi", color: "Black", price: 75, size: 9, function: "Skateboarding", image_url: "https://cdn.shoplightspeed.com/shops/615391/files/13497025/image.jpg")
carmine=Shoe.create(brand_id: air_jordan.id, nickname: "Carmine", color: "Red/White", price: 220, size: 12, function: "Basketball", image_url: "https://sneakernews.com/wp-content/uploads/2021/01/jordan-6-carmine-official-images-ct8529-106-5.jpg")
space_hippie=Shoe.create(brand_id: nike.id, nickname: "Space Hippie", color: "Gray", price: 180, size: 7, function: "Everyday Use", image_url: "https://image.goat.com/attachments/product_template_additional_pictures/images/038/008/080/medium/640512_08.jpg.jpeg?1592328109")


puts "✅ Done seeding!"
