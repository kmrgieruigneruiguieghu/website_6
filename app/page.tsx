import Image from "next/image"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { getProducts } from "@/db/queries"
import ProductsGrid from "@/components/ui/productgrid"
import Carousel from "@/components/ui/carousel"
import DeliverySection from "@/components/ui/deliverysection"
import PromotionSection from "@/components/ui/promotions"

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const sp = await searchParams
  const page = Math.max(1, Number(sp.page) || 1)
  const pageSize = 8

  const { products, pages } = await getProducts(page, pageSize)

  const visiblePages: number[] = []
  for (let i = page - 2; i <= page + 2; i++) {
    if (i > 0 && i <= pages) {
      visiblePages.push(i)
    }
  }

  return (
    <div>
      <Carousel />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-8 relative z-10">
        <h2 className="text-3xl font-bold mb-8">Новинки</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { name: "Карбонара", price: 120 },
            { name: "Карбонара", price: 120 },
            { name: "Карбонара", price: 120 },
            { name: "Карбонара", price: 120 },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-3 flex items-center gap-4 border border-gray-100">
              <div className="relative w-20 h-20 shrink-0">
                <Image src="/mini_pizza.png" alt="Пицца мини" fill className="object-contain" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-yellow-600 font-bold text-lg">от {item.price} ₽</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="relative h-0 overflow-visible">
        <div className="absolute -top-50 -translate-x-48 hidden lg:block">
          <div className="relative w-96 h-112">
            <Image src="/man.png" alt="Чувак" fill className="object-contain" />
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-0 relative z-10">
        <h2 className="text-3xl font-bold mb-8">Пицца</h2>
        <ProductsGrid products={products} />
        <div className="mt-12 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href={`?page=${Math.max(page - 1, 1)}`}
                  className="[&_span]:hidden [&_svg]:block" />
              </PaginationItem>
              {visiblePages.map((p) => (
                <PaginationItem key={p}>
                  <PaginationLink
                    href={`?page=${p}`}
                    isActive={p === page}
                    className={p === page ? "bg-yellow-400 text-black hover:bg-yellow-500" : ""}>
                    {p}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext 
                  href={`?page=${Math.min(page + 1, pages)}`}
                  className="[&_span]:hidden [&_svg]:block" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>

      <PromotionSection />

      <div className="relative h-0 overflow-visible">
        <div className="absolute right-0 -top-80 translate-x-40 z-0 hidden lg:block">
          <div className="relative w-96 h-112">
            <Image src="/woman.png" alt="Женщина" fill className="object-contain" />
          </div>
        </div>
      </div>

      <DeliverySection />
    </div>
  )
}