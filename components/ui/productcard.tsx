import type { Product } from "@/db/types"  // ← только импорт, без объявления типа
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {product.isNew && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10">
          NEW
        </span>
      )}
      <div className="relative h-56 w-full bg-gray-100">
        <Image
          src={`/products/${product.imageName}`}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-1">{product.title}</h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-3">
          {product.description || "Без описания"}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-red-600">от {product.price} ₽</span>
          <Button variant="default" className="rounded-full bg-red-500 hover:bg-red-700">
            В корзину
          </Button>
        </div>
      </div>
    </div>
  )
}