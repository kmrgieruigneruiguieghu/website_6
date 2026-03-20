import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"

export const products = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("title").notNull(),
  email: integer("price").notNull(),
  description: text("description")
})