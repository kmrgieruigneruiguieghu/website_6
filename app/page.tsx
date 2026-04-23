import { getProducts } from "@/db/queries"
import ProductsGrid from "@/components/ui/productgrid"
import CustomPagination from "@/components/ui/custompagination"
import Carousel from "@/components/ui/carousel"
import DeliverySection from "@/components/ui/deliverysection"

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const params = await searchParams
  const page = Math.max(1, Number(params.page) || 1)
  const pageSize = 6

  const { products, pages } = await getProducts(page, pageSize)
  const newProducts = products.filter((p) => p.isNew === true).slice(0, 4)

  return (
    <>
      <Carousel />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Новинки</h2>
        <ProductsGrid products={newProducts} />
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Пицца</h2>
        <ProductsGrid products={products} />
        <div className="mt-12 flex justify-center">
          <CustomPagination currentPage={page} totalPages={pages} />
        </div>
      </section>

      <section className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-6">
            <div>
              <h2 className="text-4xl font-black">ТОРТЫ</h2>
              <p className="text-xl">ЛЮБОЙ СЛОЖНОСТИ НА ЗАКАЗ</p>
              <p className="text-red-600 font-bold text-3xl mt-2">750 ₽/кг</p>
            </div>
            <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition">
              Все акции
            </button>
          </div>
        </div>
      </section>

      <DeliverySection />
    </>
  )
}