import Image from "next/image"

export default function PromotionSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-black">Наши</span>{' '}
            <span className="text-yellow-500">акции</span>
          </h2>

          <div className="flex flex-row gap-6 mb-8">
            <div className="w-1/2">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden">
                <Image src="/cakes.png" alt="Торты" fill className="object-cover" />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="relative w-full h-36 rounded-xl overflow-hidden">
                  <Image src="/cakes.png" alt="Торт 1" fill className="object-cover" />
                </div>
                <div className="relative w-full h-36 rounded-xl overflow-hidden">
                  <Image src="/cakes.png" alt="Торт 2" fill className="object-cover" />
                </div>
                <div className="relative w-full h-36 rounded-xl overflow-hidden">
                  <Image src="/cakes.png" alt="Торт 3" fill className="object-cover" />
                </div>
                <div className="relative w-full h-36 rounded-xl overflow-hidden">
                  <Image src="/cakes.png" alt="Торт 4" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium px-8 py-3 rounded-full transition-colors">
              Все акции
            </button>
          </div>

        </div>
    </section>
  )
}