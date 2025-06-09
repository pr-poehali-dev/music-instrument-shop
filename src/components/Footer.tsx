import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Music" size={32} className="text-purple-400" />
              <span className="font-montserrat font-bold text-xl">МузМаг</span>
            </div>
            <p className="text-gray-300 mb-4">
              Ваш надежный партнер в мире музыки. Качественные инструменты для
              профессионалов и любителей.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/catalog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Каталог
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  to="/delivery"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Доставка
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Блог
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Покупателям</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/cart"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Корзина
                </Link>
              </li>
              <li>
                <Link
                  to="/account"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Личный кабинет
                </Link>
              </li>
              <li>
                <Link
                  to="/delivery"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Оплата и доставка
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Гарантия
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={18} className="text-purple-400" />
                <span className="text-gray-300">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={18} className="text-purple-400" />
                <span className="text-gray-300">info@muzmag.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={18} className="text-purple-400" />
                <span className="text-gray-300">
                  Москва, ул. Музыкальная, 12
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 МузМаг. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
