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
      description: `A pink birthday cake flavored birthday cake with a strawberry flavored ice cream cone tossed on top and sprinkles jimmied inside and outside. It is a 'sprinktacular' dessert.`,
      price: 67.65,
      image_url: `/assets/categories/cakes/birthday-cakes/birthday-cake.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[1]._id,
      quantity: 100,
    },
    {
      name: `Rainbow Birthday Cake`,
      description: `A white birthday cake with a rainbow outside and a beautiful topping of rainbow icing sprinkled with a certain cereal that resembles Lucky Charms.`,
      price: 77.25,
      image_url: `/assets/categories/cakes/birthday-cakes/colorful-birthday-cake.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[1]._id,
      quantity: 10,
    },
    {
      name: `Chocolate Cake`,
      description: `A juicy chocolate cake with a chocolate frosting and a chocolate buttercream, topped with wonderful chocolate icing.`,
      price: 57.95,
      image_url: `/assets/categories/cakes/chocolate-cakes/chocolate-cakes.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[7]._id,
      quantity: 10,
    },
    {
      name: `Chocolate Colored Cake`,
      description: `The best chocolate cake recipe. Ever? There are plenty of claims for the best chocolate cake recipe. I get that. But with one bite of this decadent, moist chocolate cake with chocolate frosting, every single person around the table commented that this was the best chocolate cake they’d ever tasted.`,
      price: 73.25,
      image_url: `/assets/categories/cakes/chocolate-cakes/chocolate-colored-cake.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[7]._id,
      quantity: 42,
    },
    {
      name: `Chocolate Smore Cake`,
      description: `Chocolate cake, with its fudgey-yet-fluffy layers and swirls of creamy frosting, is synonymous with the leg-twisting delight you felt as a kid, tackling a slice the size of your head and getting it all over your face in the process. It is a first date, butterflies in your stomach shared dessert — two forks. And it is a big birthday celebration, with too many candles to count. It is all of these things; it is the ultimate celebration food. Chocolate cake is always a good idea.`,
      price: 57.95,
      image_url: `/assets/categories/cakes/chocolate-cakes/chocolate-smore-cake.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[7]._id,
      quantity: 23,
    },
    {
      name: `The Breakfast Cupcake`,
      description: `A luscious eggo waffle cupcake with buttercream icing, infused with syrup and topped with a bite size waffle slice. A slice of breakfast is also a slice of heaven.`,
      price: 37.85,
      image_url: `/assets/categories/cakes/cupcakes/breakfast-cupcake.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[2]._id,
      quantity: 203,
    },
    {
      name: `Cherry Chocolate Fruit Cupcake`,
      description: `A chocolate cupcake with vanilla buttercream icing and a cherry on top of some hardened chocolate on only one half of the iced cupcake. A splendid chocolate cherry choice.`,
      price: 39.39,
      image_url: `/assets/categories/cakes/cupcakes/cherry-chocolate-fruit-cupcake.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[2]._id,
      quantity: 233,
    },
    {
      name: `Chocolate Blackberry Cupcake`,
      description: `A chocolate cupcake with blackberries on top of some chocolate icing. Simple... but is it?`,
      price: 43.35,
      image_url: `/assets/categories/cakes/cupcakes/chocolate-blackberry-cupcake.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[2]._id,
      quantity: 257,
    },
    {
      name: `Chocolate Caramel Cupcake`,
      description: `A chocolate cupcake with vanilla icing drizzled with caramel. Just a drizzle of generosity.`,
      price: 43.35,
      image_url: `/assets/categories/cakes/cupcakes/chocolate-caramel-cupcake.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[2]._id,
      quantity: 377,
    },
    {
      name: `A Variety of Cupcakes`,
      description: `A variety of cupcakes with a variety of flavors. Who would've thought?`,
      price: 43.75,
      image_url: `/assets/categories/cakes/cupcakes/cupcake-variety.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[2]._id,
      quantity: 377,
    },
    {
      name: `Strawberry Cupcake`,
      description: `A vanilla cupcake with strawberry bits, strawberry, vanilla, buttercream icing and a strawberry dipped in vanilla icing with another drizzle of that nice vanilla.`,
      price: 23.75,
      image_url: `/assets/categories/cakes/cupcakes/fruit-cupcake.jpg`,
      category: categories[0]._id,
      subCategory: subCategories[2]._id,
      quantity: 577,
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
