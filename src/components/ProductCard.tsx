import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  category,
  rating,
  reviews,
}: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {originalPrice && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Скидка
            </div>
          )}
          <Button
            size="sm"
            className="absolute top-3 right-3 bg-white/90 text-gray-700 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Icon name="Heart" size={16} />
          </Button>
        </div>

        <div className="p-4">
          <div className="text-sm text-purple-600 font-medium mb-1">
            {category}
          </div>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
            {name}
          </h3>

          <div className="flex items-center gap-1 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={14}
                  className={
                    i < Math.floor(rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">({reviews})</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">
                {price.toLocaleString("ru-RU")} ₽
              </span>
              {originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {originalPrice.toLocaleString("ru-RU")} ₽
                </span>
              )}
            </div>

            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              <Icon name="ShoppingCart" size={14} className="mr-1" />В корзину
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
