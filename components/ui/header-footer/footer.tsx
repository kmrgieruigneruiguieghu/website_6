import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Copyright } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Верхняя часть футера */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          
          {/* Левая колонка - логотип и соцсети */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              {/* Логотип заглушка */}
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-xl font-bold">Fib pasta bar</span>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-3">Мы в соцсетях</p>
              <div className="flex gap-4">
                {/* VK */}
                <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  <span className="text-xl">В</span>
                </Link>
                {/* @ */}
                <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  <span className="text-xl">@</span>
                </Link>
                {/* MAX */}
                <Link href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  <span className="text-xl font-bold">M</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Правая колонка - картинка Pizza Pasta Fibo */}
          <div className="flex-1 flex justify-end">
            <div className="relative w-48 h-32 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center text-white text-center p-3">
                <div>
                  <div className="text-2xl font-bold">🍕</div>
                  <div className="text-xs font-bold mt-1">Pizza Pasta</div>
                  <div className="text-[10px] mt-1">Fibo</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Середина - правовая информация и адрес */}
        <div className="grid md:grid-cols-2 gap-6 py-6 border-t border-gray-800">
          <div>
            <h3 className="font-semibold mb-3">Правовая информация</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-white">Политика конфиденциальности</Link></li>
              <li><Link href="#" className="hover:text-white">Пользовательское соглашение</Link></li>
              <li><Link href="#" className="hover:text-white">Публичная оферта</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Адрес</h3>
            <div className="flex items-start gap-2 text-gray-400 text-sm">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <span>Москва, ул. Проспект Вернадского, 86В</span>
            </div>
          </div>
        </div>

        {/* Нижняя часть - вопросы, телефон, кнопка */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm mb-2">ОСТАЛИСЬ ВОПРОСЫ? А МЫ ВСЕГДА НА СВЯЗИ:</p>
              <div className="flex gap-3 justify-center md:justify-start">
                <Link href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  <span className="text-xs">📱</span>
                </Link>
                <Link href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  <span className="text-xs">💬</span>
                </Link>
                <Link href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  <span className="text-xs">✉️</span>
                </Link>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center gap-2 text-xl font-bold text-red-500">
                <Phone size={20} />
                <span>8 499 391-84-49</span>
              </div>
              <button className="mt-2 bg-red-600 text-white px-6 py-2 rounded-full text-sm hover:bg-red-700 transition">
                Заказать звонок
              </button>
            </div>
          </div>
          
          {/* Копирайт */}
          <div className="text-center text-gray-500 text-xs mt-6 pt-4 border-t border-gray-800">
            <div className="flex items-center justify-center gap-1">
              <Copyright size={12} />
              <span>Все права защищены © 2026 Fib pasta bar</span>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  )
}