import Image from "next/image";
import { getProducts } from "@/db/queries"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default async function CatalogPage({searchParams}: {searchParams: { page?: string }}) {
  const sp = await searchParams
  const page = Math.max(1, Number(sp.page) || 1)

  // сколько товаров на странице
  const pageSize = 9

  // и товары и страницы
  const { products, pages } = await getProducts(page, pageSize)

  const visiblePages: number[] = []
  for (let i = page - 2; i <= page + 2; i++) {
    if (i > 0 && i <= pages) {
      visiblePages.push(i)
    }
  }
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-xl font-semibold">Каталог</h1>

      <div className="space-y-3">
        {products.map((p) => (
          <div key={p.id} className="border p-3 text-sm">
            <div className="font-medium">{products.title}</div>
            <div className="text-gray-500">{p.price} ₽</div>
            <div>{p.description}</div>
          </div>
        ))}
      </div>
      {/* пагинация */}
      <Pagination>
        <PaginationContent>
          {/* кнопка для предыдущей страницы */}
          <PaginationItem>
            <PaginationPrevious 
              href={`?page=${Math.max(page - 1, 1)}`} 
            />
          </PaginationItem>

          {visiblePages.map((p) => (
            <PaginationItem key={p}>
              <PaginationLink 
                href={`?page=${p}`} 
                isActive={p === page}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* кнопка для следующей страницы */}
          <PaginationItem>
            <PaginationNext 
              href={`?page=${Math.min(page + 1, pages)}`} 
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  )
}
