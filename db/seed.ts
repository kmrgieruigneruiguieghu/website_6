import { db } from "./db"
import { products } from "./schema"

async function seed() {
  await db.insert(products).values([
    {
      title: "Карбонара",
      price: 120,
      description: "Классическая итальянская паста с беконом и сыром",
      imageName: "carbonara.jpg",
      category: "pizza",
      isNew: true,
    },
    // ... ещё 14 товаров (чтобы получилось 5+ страниц)
  ])
  console.log("Данные добавлены")
}

seed()