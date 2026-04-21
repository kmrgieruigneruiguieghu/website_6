import { products } from "./schema"
import { InferSelectModel } from "drizzle-orm"

export type Product = InferSelectModel<typeof products>