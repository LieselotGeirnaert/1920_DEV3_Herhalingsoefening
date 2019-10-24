import './style.css';
import data from './assets/data/coffees.json';

{
  // let order = {};

  const showAllCoffees = data => {
    const $priceList = document.querySelector('.prices__list');
    console.log(data.coffees);
    data.coffees.forEach(coffee => {
      console.log(coffee);
      if (coffee.plantbased === true) {
        const $li = document.createElement('li');
        $li.classList.add('price');
        $li.innerHTML =
          `<a class="price__button">
            <span class="price__button__wrapper">
            <span class="price__button__name">${coffee.name}</span>
            <span class="price__button__amount">&euro; ${coffee.prices.medium}</span>
            </span>
            <span class="price__button__plus button__${coffee.id}">+</span>
          </a>`;
        $priceList.appendChild($li);
      }
    });
  };

  // const addDrinkToOrder = event => {
  //   const clickedButton = event.target;
  //   const drinkId = clickedButton.classList[1][clickedButton.classList[1].length - 1];

  //   console.log(drinkId);
  //   if (drinkId in order) {
  //     order.drinkId += 1;
  //   } else {
  //     order.push({
  //       id: drinkId,
  //       quantity: 1
  //     });
  //   }
  //   console.log(order);
  // };

  const init = () => {
    showAllCoffees(data);
    // const $priceButtons = document.querySelector('.price__button');
    // $priceButtons.addEventListener('click', addDrinkToOrder);

  };

  init();
}
