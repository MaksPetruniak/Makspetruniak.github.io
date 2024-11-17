// Масив об'єктів products
const products = [
    { name: "Телефон", category: "Електроніка", price: 8000, inStock: 10 },
    { name: "Ноутбук", category: "Електроніка", price: 25000, inStock: 5 },
    { name: "Холодильник", category: "Побутова техніка", price: 15000, inStock: 0 },
    { name: "Стіл", category: "Меблі", price: 3000, inStock: 8 },
    { name: "Смарт-годинник", category: "Електроніка", price: 5000, inStock: 3 },
  ];
  
  // Функція для отримання доступних товарів
  function getAvailableProducts(products) {
    return products.filter(product => product.inStock > 0);
  }
  
  // Відображення доступних товарів
  function displayAvailableProducts() {
    const availableProducts = getAvailableProducts(products);
    const container = document.getElementById("available-products");
    container.innerHTML = availableProducts.map(product =>
      `<p>${product.name} (Категорія: ${product.category}, Ціна: ${product.price} грн, На складі: ${product.inStock})</p>`
    ).join("");
  }
  
  // Функція для пошуку товару за назвою
  function findProductByName(products, productName) {
    const product = products.find(product => product.name.toLowerCase() === productName.toLowerCase());
    return product ? product : "Товар не знайдено";
  }
  
  // Обробка пошуку товару
  function handleSearch() {
    const productName = document.getElementById("product-name").value;
    const result = findProductByName(products, productName);
    const resultContainer = document.getElementById("search-result");
    if (typeof result === "string") {
      resultContainer.textContent = result;
    } else {
      resultContainer.textContent = `${result.name} (Категорія: ${result.category}, Ціна: ${result.price} грн, На складі: ${result.inStock})`;
    }
  }
  
  // Додаємо обробник події для кнопки пошуку
  document.getElementById("search-button").addEventListener("click", handleSearch);
  
  // Відображаємо доступні товари при завантаженні сторінки
  displayAvailableProducts();
  