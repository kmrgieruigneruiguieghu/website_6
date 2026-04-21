import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"

export const products = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  price: integer("price").notNull(),
  description: text("description"),
  imageName: text("image_name").notNull(),
  category: text("category").notNull(),
  isNew: integer("is_new", { mode: "boolean" }).default(false),
})