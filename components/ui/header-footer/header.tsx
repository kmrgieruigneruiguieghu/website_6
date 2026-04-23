"use client"

import Link from "next/link"
import { Phone, User, ChevronDown } from "lucide-react"

const navItems = [
  "Пицца", "Паста", "Супы", "Салаты", "Напитки",
  "Десерты", "Бакалея", "Антипасти", "Акции", "Комбо", "Контакты"
]

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="text-2xl font-bold text-red-600">
          🍕 Pizza Pasta
        </Link>

        <div className="hidden lg:flex items-center gap-6 text-gray-700 font-medium">
          {navItems.map((item) => (
            <Link key={item} href="#" className="hover:text-red-600 transition">
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 border rounded-full px-4 py-2 text-sm hover:bg-gray-50">
            <User size={16} />
            <span>Войти</span>
          </button>
          <button className="bg-red-600 text-white px-5 py-2 rounded-full text-sm hover:bg-red-700 transition">
            Заказать звонок
          </button>
        </div>
      </div>
    </header>
  )
}