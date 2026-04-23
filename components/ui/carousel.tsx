"use client"

import { useState, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  { id: 1, image: "/image_1.png", alt: "Слайд 1" },
  { id: 2, image: "/image_2.png", alt: "Слайд 2" },
  { id: 3, image: "/image_3.png", alt: "Слайд 3" },
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [])

  const getSlide = (offset: number) => {
    let index = currentIndex + offset
    if (index < 0) index = slides.length + index
    if (index >= slides.length) index = index - slides.length
    return slides[index]
  }

  return (
    <div className="relative overflow-hidden py-16 bg-white">
      <div className="relative">
        
        {/* Кнопка назад */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110 border border-gray-100"
          aria-label="Предыдущий слайд"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Кнопка вперёд */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110 border border-gray-100"
          aria-label="Следующий слайд"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        {/* Карусель - боковые выходят за экран */}
        <div className="flex justify-center items-center overflow-visible">
          
          {/* Левый полупрозрачный (выходит за экран слева) */}
          <div className="hidden lg:block w-64 flex-shrink-0 transition-all duration-500 opacity-30 -ml-32">
            <div className="relative w-full h-72">
              <Image
                src={getSlide(-1).image}
                alt={getSlide(-1).alt}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Первый центральный */}
          <div className="w-80 sm:w-96 flex-shrink-0 transition-all duration-500">
            <div className="relative w-full h-80 sm:h-96">
              <Image
                src={getSlide(0).image}
                alt={getSlide(0).alt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Второй центральный */}
          <div className="w-80 sm:w-96 flex-shrink-0 transition-all duration-500">
            <div className="relative w-full h-80 sm:h-96">
              <Image
                src={getSlide(1).image}
                alt={getSlide(1).alt}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Правый полупрозрачный (выходит за экран справа) */}
          <div className="hidden lg:block w-64 flex-shrink-0 transition-all duration-500 opacity-30 -mr-32">
            <div className="relative w-full h-72">
              <Image
                src={getSlide(2).image}
                alt={getSlide(2).alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}