import Image from "next/image"

export default function DeliverySection() {
  return (
    <section className="bg-gray-200 relative z-20 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-500 mb-12">Оплата и доставка</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl pt-8 pb-6 px-4 text-center relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <div className="relative w-10 h-10">
                <Image src="/delvicon_1.png" alt="Иконка доставки 1" fill className="object-contain" />
              </div>
            </div>
            <p className="text-gray-800 text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="bg-white rounded-2xl pt-8 pb-6 px-4 text-center relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <div className="relative w-10 h-10">
                <Image src="/delvicon_2.png" alt="Иконка доставки 2" fill className="object-contain" />
              </div>
            </div>
            <p className="text-gray-800 text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="bg-white rounded-2xl pt-8 pb-6 px-4 text-center relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <div className="relative w-10 h-10">
                <Image src="/delvicon_3.png" alt="Иконка доставки 3" fill className="object-contain" />
              </div>
            </div>
            <p className="text-gray-800 text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="bg-white rounded-2xl pt-8 pb-6 px-4 text-center relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <div className="relative w-10 h-10">
                <Image src="/delvicon_4.png" alt="Иконка доставки 4" fill className="object-contain" />
              </div>
            </div>
            <p className="text-gray-800 text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>

        <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1124.4415081705374!2d37.61171411234835!3d55.691031277906745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54ca8181725cf%3A0x4235fc389dbf8faf!2z0KjQutC-0LvQsCAyNtC60LDQtNGA!5e0!3m2!1sru!2sru!4v1776981493385!5m2!1sru!2sru" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy">
          </iframe>
        </div>
      </div>
    </section>
  )
}