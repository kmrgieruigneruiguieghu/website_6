import Image from "next/image"
import type { Product } from "@/db/types"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative w-full h-50">
        <Image src={`/${product.imageName || "pizza_1.png"}`} alt={product.title} fill className="object-contain p-3" />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-700 text-base mb-1">{product.title}</h3>
        <p className="text-gray-500 text-xs mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-black">от {product.price} ₽</span>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-1.5 rounded-lg text-xs transition-colors">
            В корзину
          </button>
        </div>
      </div>
    </div>
  )
}