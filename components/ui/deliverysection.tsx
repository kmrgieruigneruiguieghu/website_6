"use client"

import { useEffect, useRef } from "react"

export default function DeliverySection() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Загружаем скрипт Яндекс.Карт
    const script = document.createElement("script")
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=ваш_ключ&lang=ru_RU"
    script.async = true
    script.onload = () => {
      // @ts-ignore
      window.ymaps.ready(() => {
        // @ts-ignore
        const map = new window.ymaps.Map(mapRef.current, {
          center: [55.751574, 37.573856], // центр Москвы
          zoom: 12,
          controls: ["zoomControl", "fullscreenControl"],
        })
        // @ts-ignore
        const placemark = new window.ymaps.Placemark(
          [55.751574, 37.573856],
          { hintContent: "Наша доставка", balloonContent: "Зона доставки по всему городу" },
          { preset: "islands#redDotIcon" }
        )
        map.geoObjects.add(placemark)
      })
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Оплата и доставка</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Левый блок – текст */}
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-xl mb-2">Способы оплаты</h3>
            <p className="text-gray-600">Наличными курьеру, картой онлайн, безналичный расчёт для юр. лиц.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Условия доставки</h3>
            <p className="text-gray-600">Бесплатно при заказе от 800 ₽. Время доставки — от 31 минуты.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Районы доставки</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Центр</li>
              <li>Северное Измайлово</li>
              <li>Соколиная гора</li>
              <li>Преображенское</li>
            </ul>
          </div>
        </div>

        {/* Правый блок – интерактивная карта */}
        <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
          <div ref={mapRef} className="w-full h-full" />
        </div>
      </div>
    </section>
  )
}