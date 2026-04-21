import { db } from "./db"
import { products } from "./schema"
import { asc, count } from "drizzle-orm"
import type { Product } from "./types"

export async function getProducts(page: number = 1, pageSize: number = 6) {
  const offset = (page - 1) * pageSize

  const items = await db
    .select()
    .from(products)
    .orderBy(asc(products.id))
    .limit(pageSize)
    .offset(offset)

  const totalResult = await db
    .select({ count: count() })
    .from(products)

  const total = totalResult[0]?.count ?? 0
  const pages = Math.ceil(total / pageSize)

  return {
    products: items as Product[],  // ← приведение типа
    pages,
  }
}