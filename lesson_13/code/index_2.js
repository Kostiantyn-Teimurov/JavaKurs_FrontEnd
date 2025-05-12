const drinks = [
    { name: "Bloody Mary", strength: 14, price: 7 },
    { name: "Jin", strength: 25, price: 4 },
    { name: "Beer", strength: 7, price: 3.5 },
    { name: "Cider", strength: 2, price: 5 },
    { name: "Beer", strength: 7, price: 5 },
  ];
  
  // Задание 1
  // Найдите индекс Jin
  // Замените джин на объект "Tequilla"
  
  // Задание 2
  // Сделайте все напитки в масиве крепче на 1 градус
  
  // Задание 3
  // посчитайте стоимость всех пив
  
  // 1
  const indexOfJin = drinks.findIndex((drink) => drink.name === "Jin");
  console.log(indexOfJin);
  
  drinks.splice(indexOfJin, 1); // удалили по индексу
  console.log(drinks);
  
  // 2
  drinks.forEach((drink) => drink.strength++);
  console.log(drinks);
  
  // 3
  const totalBeerPrice = drinks.reduce((acc, drink) => {
    if (drink.name === "Beer") {
      return acc + drink.price;
    }
    return acc;
  }, 0);
  
  console.log(totalBeerPrice); // 8.5
  
  // filter
  // создает новый массив, в него войдут только элементы удовлетворяющие условию
  
  const beers = drinks.filter((a) => a.name === "Beer");
  
  console.log(beers); 
  // [
  //     { name: 'Beer', strength: 8, price: 3.5 },
  //     { name: 'Beer', strength: 8, price: 5 }
  // ]
  