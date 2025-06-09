import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-montserrat text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Мир музыки
              <span className="block text-purple-300">начинается здесь</span>
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Профессиональные музыкальные инструменты для начинающих и
              мастеров. Более 1000 товаров от ведущих брендов мира.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-purple-900 hover:bg-purple-50"
              >
                <Icon name="Music" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-900"
              >
                Узнать больше
              </Button>
            </div>

            <div className="flex items-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-purple-200 text-sm">Товаров</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-purple-200 text-sm">Брендов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10</div>
                <div className="text-purple-200 text-sm">Лет опыта</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center"
                alt="Музыкальные инструменты"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute top-4 left-4 w-full h-full bg-purple-400 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
