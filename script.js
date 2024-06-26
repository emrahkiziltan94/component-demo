let productList = [
  { name: 'pc', price: 1200, backgroundColor: 'red' },
  { name: 'phone', price: 600, backgroundColor: 'blue' },
  { name: 'tablet', price: 1400, backgroundColor: 'yellow' },
  { name: 'klavye', price: 300, backgroundColor: 'pink' },
  { name: 'pc', price: 1200, backgroundColor: 'aqua' },
  { name: 'pc', price: 1200, backgroundColor: 'red' },
];

/*
<div style="background-color:{backgroundColor}">
  <h3>{name}</h3>
  <p>{price}</p>
</div>
<div style="background-color:{backgroundColor}">
  <h3>{name}</h3>
  <p>{price}</p>
</div>
<div style="background-color:{backgroundColor}">
  <h3>{name}</h3>
  <p>{price}</p>
</div>
<div style="background-color:{backgroundColor}">
  <h3>{name}</h3>
  <p>{price}</p>
</div>
<div style="background-color:{backgroundColor}">
  <h3>{name}</h3>
  <p>{price}</p>
</div><div style="background-color:{backgroundColor}">
  <h3>{name}</h3>
  <p>{price}</p>
</div>
*/


const container = document.getElementById('container');

// birinci yol


// ikinci yol
const items = productList.map(product=> getDivItem(product));
console.log(items);
container.append(...items);

function getDivItem(product) {
  const divItem = document.createElement('div');
  divItem.style.backgroundColor = product.backgroundColor;
  const h3Title = document.createElement('h3');
  h3Title.textContent = product.name;
  divItem.appendChild(h3Title);
  const pPrice = document.createElement('p');
  pPrice.textContent = product.price;
  divItem.appendChild(pPrice);
  return divItem;
}
