import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"

export const products = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  imageName: text("image_name").notNull().default("pizza_1.png"),
})