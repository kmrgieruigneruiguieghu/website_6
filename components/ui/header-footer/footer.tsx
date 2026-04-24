import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="relative w-20 h-20 mb-6">
              <Image src="/logo.png" alt="Логотип" fill className="object-contain" />
            </div>
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="font-semibold text-black mb-3">Калорийность и состав</h3>
                <div className="mt-4">
                  <p className="font-semibold text-black mb-2">Мы в соцсетях</p>
                  <div className="flex gap-20 text-gray-500 text-sm">
                    <p>ВКонтакте</p>
                    <p>Max</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-3">Правовая информация</h3>
                <div className="mt-4">
                  <p className="text-gray-500 text-sm leading-relaxed">Москва ул. Проспект<br />Вернадского 86В</p>
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">Все права защищены © 2026</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-black mb-4 text-center lg:text-left">
              ОСТАЛИСЬ ВОПРОСЫ? А МЫ ВСЕГДА НА СВЯЗИ:
            </h3>
            <div className="flex gap-3 mb-4">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center border border-blue-200">
                <div className="relative w-8 h-8">
                  <Image src="/vk.png" alt="VK" fill className="object-contain" />
                </div>
              </div>
              <div className="flex-1 h-14 rounded-xl flex items-center justify-center border border-blue-200">
                <span className="text-3xl font-bold text-black">@</span>
              </div>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center border border-blue-200">
                <div className="relative w-8 h-8">
                  <Image src="/max.png" alt="Max" fill className="object-contain" />
                </div>
              </div>
            </div>
            <div className="mb-6">
              <button className="w-full hover:bg-gray-200 text-black font-medium py-4 rounded-xl transition-colors border border-blue-200">
                Написать нам
              </button>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-3 mb-6">
              <span className="text-2xl font-bold text-yellow-400">8 499 391-84-49</span>
              <button className="bg-gray-100 hover:bg-gray-200 text-black font-medium px-6 py-2 rounded-xl transition-colors">
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 translate-x-2 translate-y-8 hidden lg:block">
        <div className="relative w-100 h-50">
          <Image src="/big_logo.png" alt="Big logo" fill className="object-contain" />
        </div>
      </div>
    </footer>
  )
}