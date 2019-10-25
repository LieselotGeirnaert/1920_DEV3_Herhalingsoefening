import './style.css';
import data from './assets/data/coffees.json';

{
  const orders = [];
  let amountOfOrders = 0;

  const showAllCoffees = data => {
    const $priceList = document.querySelector('.prices__list');

    data.coffees.forEach(coffee => {
      if (coffee.plantbased === true) {
        const $li = document.createElement('li');
        $li.setAttribute('class', 'price');
        $li.setAttribute('data-id', coffee.id);
        $li.innerHTML =
          `<a class="price__button">
            <span class="price__button__wrapper">
            <span class="price__button__name">${coffee.name}</span>
            <span class="price__button__amount">&euro; ${coffee.prices.medium}</span>
            </span>
            <span class="price__button__plus" data-id="${coffee.id}">+</span>
          </a>`;
        $priceList.appendChild($li);
      }
    });
  };

  const addDrinkToOrder = event => {
    const clickedButton = event.target;
    const drinkId = clickedButton.dataset.id;

    if (orders[drinkId] == null) {
      orders[drinkId] = 1;
    } else {
      orders[drinkId] = orders[drinkId] + 1;
    }

    amountOfOrders += 1;
    updateOrders(orders, data);
  };

  const removeDrinkFromOrder = event => {
    const clickedButton = event.target;
    const drinkId = clickedButton.dataset.id;

    if (orders[drinkId] === 1) {
      orders[drinkId] = null;
    } else {
      orders[drinkId] = orders[drinkId] - 1;
    }

    amountOfOrders -= 1;
    updateOrders(orders, data);
  };

  const updateOrders = (orders, data) => {
    const $orders = document.querySelector('.orders__wrapper');
    const $emptystate = document.querySelector('.emptystate');

    const $orderList = document.querySelector('.orders');
    const $totalPrice = document.querySelector('.total__price span');
    let totalPrice = 0;

    while ($orderList.hasChildNodes()) {
      $orderList.removeChild($orderList.firstChild);
    }

    if (amountOfOrders > 0) {
      $orders.classList.remove('hide');
      $emptystate.classList.add('hide');

      data.coffees.forEach(coffee => {
        if (orders[coffee.id] != null) {
          const $li = document.createElement('li');
          $li.setAttribute('class', 'order');
          $li.innerHTML =
            `<span class="order__name">
              <span class="order__amount">${orders[coffee.id]} x</span> ${coffee.name}
            </span>
            <span class="order__price">&euro; ${coffee.prices.medium * orders[coffee.id]}</span>
            <button class="remove" data-id="${coffee.id}">
              x
            </button>`;
          $orderList.appendChild($li);
          totalPrice += coffee.prices.medium * orders[coffee.id];
        }
      });

      const $removeButtons = document.getElementsByClassName('remove');
      for (let i = 0;i < $removeButtons.length;i ++) {
        $removeButtons[i].addEventListener('click', removeDrinkFromOrder);
      }
      $totalPrice.innerHTML = totalPrice;
    } else {
      $orders.classList.add('hide');
      $emptystate.classList.remove('hide');
    }
  };

  const init = () => {
    showAllCoffees(data);

    const $priceButtons = document.getElementsByClassName('price__button');
    for (let i = 0;i < $priceButtons.length;i ++) {
      $priceButtons[i].addEventListener('click', addDrinkToOrder);
    }
  };

  init();
}
