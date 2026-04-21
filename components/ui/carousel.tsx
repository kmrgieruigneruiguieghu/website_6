"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  { id: 1, title: "ЗА 149₽.", subtitle: "до 05.12.2021", image: "/promo1.jpg" },
  { id: 2, title: "Акция дня", subtitle: "Скидка 20%", image: "/promo2.jpg" },
  { id: 3, title: "Новинка", subtitle: "Пробуйте первыми", image: "/promo3.jpg" },
]

export default function Carousel() {
  const [current, setCurrent] = useState(1) // центральный индекс
  const [items, setItems] = useState(() => {
    // создаём «бесконечный» массив: дублируем слайды
    return [...slides, ...slides, ...slides]
  })

  const prev = useCallback(() => {
    setCurrent((prev) => prev - 1)
  }, [])

  const next = useCallback(() => {
    setCurrent((prev) => prev + 1)
  }, [])

  // эффект для «перемотки» при достижении границ
  useEffect(() => {
    const middleStart = slides.length
    const middleEnd = slides.length * 2 - 1
    if (current < middleStart) {
      setTimeout(() => setCurrent(current + slides.length), 0)
    } else if (current > middleEnd) {
      setTimeout(() => setCurrent(current - slides.length), 0)
    }
  }, [current, slides.length])

  return (
    <div className="relative overflow-hidden py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* кнопки */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 shadow hover:bg-white transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 shadow hover:bg-white transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* карусель */}
        <div className="flex justify-center items-center gap-4 overflow-hidden">
          {items.map((slide, idx) => {
            const offset = idx - current
            let opacity = "opacity-0 pointer-events-none"
            let scale = "scale-75"
            let zIndex = "z-0"

            if (offset === 0) {
              opacity = "opacity-100"
              scale = "scale-100"
              zIndex = "z-10"
            } else if (offset === -1 || offset === 1) {
              opacity = "opacity-50"
              scale = "scale-90"
              zIndex = "z-5"
            } else if (offset === -2 || offset === 2) {
              opacity = "opacity-20"
              scale = "scale-75"
            }

            return (
              <div
                key={`${slide.id}-${idx}`}
                className={`transition-all duration-500 ease-in-out ${opacity} ${scale} ${zIndex} w-80 flex-shrink-0`}
              >
                <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl p-6 text-white text-center shadow-xl">
                  <div className="text-5xl font-black mb-2">{slide.title}</div>
                  <div className="text-xl">{slide.subtitle}</div>
                  <div className="mt-4 h-40 relative">
                    <Image
                      src={slide.image}
                      alt="promo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}