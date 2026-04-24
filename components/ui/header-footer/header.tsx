import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image src="/logo.png" alt="Логотип" fill className="object-contain" />
            </div>
            <div>
              <div className="text-sm font-medium">
                Доставка пасты <span className="text-yellow-400">Москва</span>
              </div>
              <div className="flex items-center gap-2 text-xs mt-0.5">
                <div className="relative w-4 h-4">
                  <Image src="/yandex.png" alt="Яндекс еда" fill className="object-contain" />
                </div>
                <span>Яндекс еда</span>
                <span className="text-red-500 text-lg leading-3">•</span>
                <span>4.8</span>
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span>Время доставки</span>
                <span className="text-red-500 text-lg leading-3">•</span>
                <span>от 31 мин</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-yellow-400 font-medium px-5 py-2 rounded-full text-sm transition">Заказать звонок</Link>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-yellow-400">8 499 391-84-49</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100">
          <nav className="flex flex-wrap items-center justify-between py-3 gap-2 text-sm font-medium">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <Link href="#" className="hover:text-yellow-400 transition">Пицца</Link>
              <Link href="#" className="hover:text-yellow-400 transition">Паста</Link>
              <Link href="#" className="hover:text-yellow-400 transition">Супы</Link>
              <Link href="#" className="hover:text-yellow-400 transition">Салаты</Link>
              <Link href="#" className="hover:text-yellow-400 transition">Напитки</Link>
              <Link href="#" className="hover:text-yellow-400 transition">Десерты</Link>
              <Link href="#" className="hover:text-yellow-400 transition">Бакалея</Link>
              <Link href="#" className="hover:text-yellow-400 transition">Антипасти</Link>
              <Link href="#" className="hover:text-yellow-400 transition">Акции</Link>
              <Link href="#" className="hover:text-yellow-400 transition">Комбо</Link>
              <Link href="#" className="hover:text-yellow-400 transition">Контакты</Link>
              <Link href="#" className="hover:text-yellow-400 transition font-bold">Войти</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}