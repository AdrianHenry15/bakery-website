const db = require("./connection");
const { User, Product, Category, SubCategory } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Cakes" },
    { name: "Cookies" },
    { name: "Pastries" },
  ]);

  console.log("categories seeded");

  await SubCategory.deleteMany();

  const subCategories = await SubCategory.insertMany([
    { name: "Baby Shower Cakes" },
    { name: "Birthday Cakes" },
    { name: "Cupcakes" },
    { name: "Fruit Cakes" },
    { name: "Holiday Cakes" },
    { name: "Special Cakes" },
    { name: "Wedding Cakes" },
    { name: "Chocolate Cakes" },
    { name: "Cookie Cakes" },
    { name: "Chocolate Chip Cookies" },
    { name: "Fruit Cookies" },
    { name: "Gingerbread Cookies" },
    { name: "Macaron Cookies" },
    { name: "Oatmeal Raisin Cookies" },
    { name: "Snickerdoodle Cookies" },
    { name: "Special Cookies" },
    { name: "Sugar Cookies" },
    { name: "Danishes" },
    { name: "Pies" },
    { name: "Strudels" },
    { name: "Tarts" },
  ]);

  console.log("subcategories seeded");

  await Product.deleteMany();

  // create all seeds
  const products = await Product.insertMany([
    {
      name: `Birthday Cake`,
      description: `Description TBD`,
      price: 67.65,
      image_url: `/assets/categories/dogs/food/purina.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[0]._id,
      quantity: 100,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    first_name: "Molly",
    last_name: "Gravitte",
    email: "molly@example.com",
    password: "password",
    isAdmin: true,
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
    cart: [
    ],
    wishlist: [products[0]._id, products[1]._id],
  });

  await User.create({
    first_name: "Adrian",
    last_name: "Henry",
    email: "adrian@example.com",
    password: "password",
  });

  await User.create({
    first_name: "Demo",
    last_name: "Demo",
    email: "demo@example.com",
    password: "demo123",
  });

  console.log("users seeded");

  process.exit();
});
