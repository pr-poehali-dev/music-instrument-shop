import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Акустическая гитара Yamaha FG830",
      price: 25990,
      originalPrice: 29990,
      image:
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=300&fit=crop&crop=center",
      category: "Гитары",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Электропианино Casio CDP-S110",
      price: 42000,
      image:
        "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=300&fit=crop&crop=center",
      category: "Клавишные",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 3,
      name: "Барабанная установка Pearl Export",
      price: 89990,
      image:
        "https://images.unsplash.com/photo-1571327073757-71d13cb24cd8?w=400&h=300&fit=crop&crop=center",
      category: "Ударные",
      rating: 4.9,
      reviews: 67,
    },
    {
      id: 4,
      name: "Скрипка 4/4 Stentor Student II",
      price: 18500,
      image:
        "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=400&h=300&fit=crop&crop=center",
      category: "Струнные",
      rating: 4.5,
      reviews: 45,
    },
    {
      id: 5,
      name: "Саксофон альт Yamaha YAS-280",
      price: 145000,
      originalPrice: 165000,
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center",
      category: "Духовые",
      rating: 4.7,
      reviews: 32,
    },
    {
      id: 6,
      name: "Электрогитара Fender Player Stratocaster",
      price: 89990,
      image:
        "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=400&h=300&fit=crop&crop=center",
      category: "Гитары",
      rating: 4.9,
      reviews: 156,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-4">
            Популярные инструменты
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите из нашей коллекции высококачественных музыкальных
            инструментов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Посмотреть все товары
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
