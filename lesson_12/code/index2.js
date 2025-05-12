const leon = {
    name: "Leon",
    sayHello() {
      console.log(`Hello, I am ${this.name}`);
    },
  };
  
  leon.sayHello();
  
  leon.name = "Leonid Igorevic";
  
  leon.sayHello();
  
  // example Circe
  
  const circe = {
    radius: 4,
    getArea() {
      return Math.PI * this.radius ** 2;
    },
  };
  
  console.log(circe.getArea()); // 50.26548245743669
  
  circe.radius = 10;
  
  console.log(circe.getArea()); // 314.1592653589793
  
  // Создайте объект квадрат square пусть поле sideLegnth - сторона
  // сделайте два метода посчитать площадь и посчитать периметр
  
  // Сделай функцию, которая бы увеличивала размер стороны квадрата в двое.
  // запусти цикл на 10 повторений - и посмотри как меняется площадь в зависимости
  // от длины стороны
  
  const square = {
    sideLength: 10,
    getArea() {
      return this.sideLength ** 2;
    },
    getPerimeter() {
      return this.sideLength * 4;
    },
    //   метод увеличивающий ширину в 2 раза
    increaseLength() {
      this.sideLength = this.sideLength * 2;
    },
  };
  
  console.log(square.getArea()); // 100
  console.log(square.getPerimeter());
  square.increaseLength();
  console.log(square.getArea()); // 400
  
  //
  // const getArea = square.getArea();
  const { getArea } = square;
  
  console.log(getArea()); // функция в отрыве от объекта - без this
  
  // bind создает новую функцию, в которой в качестве this выступает указанный объект
  
  const chessBoard = {
    sideLength: 3,
  };
  const getAreaOfChessBoard = getArea.bind(chessBoard);
  
  console.log(getAreaOfChessBoard());
  chessBoard.sideLength += 2; // если объект мутировал - функция будет работать с ним
  console.log(getAreaOfChessBoard());
  
  // другой пример
  
  function sayHi() {
    console.log("My name is " + this.name);
  }
  
  sayHi(); // My name is undefined
  
  const alisher = { name: "Alisher" };
  const alisherSayHi = sayHi.bind(alisher); // получили связанную с объектом функцию
  
  alisherSayHi();
  alisherSayHi();
  
  // APPLY сразу вызывает функцию с указанным объектом в качестве this 
  
  sayHi.apply({ name: "Vasiliy" }); // My name is Vasiliy
  