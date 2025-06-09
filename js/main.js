function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

// Добавление товара в корзину
function addToCart(productId) {
  // Здесь можно добавить логику работы с корзиной
  console.log("Добавлен товар с ID:", productId);

  // Показать уведомление
  showNotification("Товар добавлен в корзину!");
}

// Показать уведомление
function showNotification(message) {
  const notification = document.createElement("div");
  notification.className =
    "fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50";
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  console.log("МузМаг загружен");
});
