// if an object has a property key name the same as the value you can omit the latter

function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function () {
      return inventory.reduce((sum, book) => sum + book.price, 0);
    },
    priceForTitle: function (title) {
      return inventory.filter((book) => book.title === title);
    },
  };
}
const inventory = [
  { title: 'harry Potter', price: 30 },
  { title: 'eloquent js', price: 22.3 },
];

const bookStore = createBookShop(inventory);
bookStore.inventoryValue();
bookStore.priceForTitle('eloquent js');

function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return inventory.reduce((sum, book) => sum + book.price, 0);
    },
    priceForTitle(title) {
      return inventory.filter((book) => book.title === title);
    },
  };
}
