import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Music" size={32} className="text-purple-600" />
            <span className="font-montserrat font-bold text-xl text-gray-900">
              МузМаг
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/catalog"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Каталог
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              О нас
            </Link>
            <Link
              to="/delivery"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Доставка
            </Link>
            <Link
              to="/contacts"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Контакты
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Блог
            </Link>
          </nav>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="User" size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/catalog"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600"
              >
                Каталог
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600"
              >
                О нас
              </Link>
              <Link
                to="/delivery"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600"
              >
                Доставка
              </Link>
              <Link
                to="/contacts"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600"
              >
                Контакты
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600"
              >
                Блог
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
