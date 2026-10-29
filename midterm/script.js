const MAX_PER_PRODUCT = 4;
const cart = [];

const cards = document.querySelectorAll('.product-card');
const cartLink = document.getElementById('cartLink');
const cartBadge = document.getElementById('cartBadge');
const miniCart = document.getElementById('miniCart');
const cartList = document.getElementById('cartList');
const cartEmpty = document.getElementById('cartEmpty');
const cartTotal = document.getElementById('cartTotal');

function formatPrice(amount) {
  return 'Rs ' + amount.toLocaleString('en-US');
}

function readPrice(text) {
  return Number(text.replace(/[^0-9]/g, ''));
}

function countOf(name) {
  return cart.filter(function (item) {
    return item.name === name;
  }).length;
}

function render() {
  cartBadge.textContent = cart.length;
  cartBadge.hidden = cart.length === 0;
  cartEmpty.hidden = cart.length > 0;

  cartList.innerHTML = '';
  cart.forEach(function (item, index) {
    const row = document.createElement('li');

    const info = document.createElement('div');
    const name = document.createElement('span');
    name.className = 'item-name';
    name.textContent = item.name;
    const price = document.createElement('span');
    price.className = 'item-price';
    price.textContent = formatPrice(item.price);
    info.append(name, price);

    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'btn-remove';
    remove.dataset.index = index;
    remove.textContent = 'Remove';

    row.append(info, remove);
    cartList.append(row);
  });

  const total = cart.reduce(function (sum, item) {
    return sum + item.price;
  }, 0);
  cartTotal.textContent = formatPrice(total);

  cards.forEach(function (card) {
    const button = card.querySelector('.btn-accent');
    const name = card.querySelector('.product-title').textContent.trim();
    const reached = countOf(name) >= MAX_PER_PRODUCT;
    button.disabled = reached;
    button.innerHTML = reached ? 'Limit reached' : button.dataset.label;
  });
}

cards.forEach(function (card) {
  const button = card.querySelector('.btn-accent');
  button.dataset.label = button.innerHTML;

  button.addEventListener('click', function () {
    const name = card.querySelector('.product-title').textContent.trim();
    const price = readPrice(card.querySelector('.price-new').textContent);
    if (countOf(name) >= MAX_PER_PRODUCT) {
      return;
    }
    cart.push({ name: name, price: price });
    render();
  });
});

cartList.addEventListener('click', function (event) {
  const button = event.target.closest('.btn-remove');
  if (!button) {
    return;
  }
  cart.splice(Number(button.dataset.index), 1);
  render();
});

cartLink.addEventListener('click', function (event) {
  event.preventDefault();
  miniCart.hidden = !miniCart.hidden;
  cartLink.setAttribute('aria-expanded', String(!miniCart.hidden));
});

render();
