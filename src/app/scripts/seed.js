// scripts/seed.js
import dbConnect from "../lib/mongodb";
import Product from "../models/Product";

const products = [
  { title: "Ruhava Sample A", slug: "ruhava-sample-a", description: "Luxury scent A", price: 499, image: "/images/p1.jpg", stock: 20 },
  { title: "Ruhava Sample B", slug: "ruhava-sample-b", description: "Luxury scent B", price: 699, image: "/images/p2.jpg", stock: 15 },
];

async function seed() {
  await dbConnect();
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("Seeded products");
  process.exit();
}

seed();
