
<header class="bg-white shadow-sm border-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
            <!-- Logo -->
            <a href="/" class="flex items-center space-x-2">
                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                </svg>
                <span class="font-montserrat font-bold text-xl text-gray-900">МузМаг</span>
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center space-x-8">
                <a href="catalog.php" class="text-gray-700 hover:text-purple-600 transition-colors">Каталог</a>
                <a href="about.php" class="text-gray-700 hover:text-purple-600 transition-colors">О нас</a>
                <a href="delivery.php" class="text-gray-700 hover:text-purple-600 transition-colors">Доставка</a>
                <a href="contacts.php" class="text-gray-700 hover:text-purple-600 transition-colors">Контакты</a>
                <a href="blog.php" class="text-gray-700 hover:text-purple-600 transition-colors">Блог</a>
            </nav>

            <!-- Right section -->
            <div class="flex items-center space-x-4">
                <button class="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
                <button class="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                </button>
                <button class="p-2 text-gray-600 hover:text-purple-600 transition-colors relative">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m-2.4 0L3 3m0 0l1.68 7.832a2 2 0 001.962 1.668h9.72a2 2 0 001.963-1.668L20 7H5.4"></path>
                    </svg>
                    <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                </button>

                <!-- Mobile menu button -->
                <button class="md:hidden p-2 text-gray-600" onclick="toggleMobileMenu()">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="hidden md:hidden border-t bg-white">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <a href="catalog.php" class="block px-3 py-2 text-gray-700 hover:text-purple-600">Каталог</a>
                <a href="about.php" class="block px-3 py-2 text-gray-700 hover:text-purple-600">О нас</a>
                <a href="delivery.php" class="block px-3 py-2 text-gray-700 hover:text-purple-600">Доставка</a>
                <a href="contacts.php" class="block px-3 py-2 text-gray-700 hover:text-purple-600">Контакты</a>
                <a href="blog.php" class="block px-3 py-2 text-gray-700 hover:text-purple-600">Блог</a>
            </div>
        </div>
    </div>
</header>
