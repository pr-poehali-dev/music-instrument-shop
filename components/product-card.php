
<div class="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white rounded-lg overflow-hidden">
    <div class="relative overflow-hidden">
        <img src="<?= $product['image'] ?>" 
             alt="<?= htmlspecialchars($product['name']) ?>" 
             class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
        
        <?php if (isset($product['originalPrice'])): ?>
            <div class="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                Скидка
            </div>
        <?php endif; ?>
        
        <button class="absolute top-3 right-3 bg-white/90 text-gray-700 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
        </button>
    </div>

    <div class="p-4">
        <div class="text-sm text-purple-600 font-medium mb-1">
            <?= htmlspecialchars($product['category']) ?>
        </div>
        <h3 class="font-semibold text-gray-900 mb-2 min-h-[3rem]">
            <?= htmlspecialchars($product['name']) ?>
        </h3>

        <div class="flex items-center gap-1 mb-3">
            <div class="flex">
                <?php for ($i = 0; $i < 5; $i++): ?>
                    <svg class="w-3.5 h-3.5 <?= $i < floor($product['rating']) ? 'text-yellow-400 fill-current' : 'text-gray-300' ?>" 
                         viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                <?php endfor; ?>
            </div>
            <span class="text-sm text-gray-500">(<?= $product['reviews'] ?>)</span>
        </div>

        <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
                <span class="text-lg font-bold text-gray-900">
                    <?= number_format($product['price'], 0, ',', ' ') ?> ₽
                </span>
                <?php if (isset($product['originalPrice'])): ?>
                    <span class="text-sm text-gray-500 line-through">
                        <?= number_format($product['originalPrice'], 0, ',', ' ') ?> ₽
                    </span>
                <?php endif; ?>
            </div>

            <button class="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded text-sm font-medium transition-colors flex items-center">
                <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m-2.4 0L3 3m0 0l1.68 7.832a2 2 0 001.962 1.668h9.72a2 2 0 001.963-1.668L20 7H5.4"></path>
                </svg>
                В корзину
            </button>
        </div>
    </div>
</div>
