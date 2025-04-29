function showWeather(weatherCode) {
  let string;
  switch (weatherCode) {
    case "SQ":
      string = "шквал";
      break;
    case "PO":
      string = "пыльный вихрь";
      break;
    case "FC":
      string = "торнадо";
      break;
    case "BR":
      string = "дымка (видимость от 1 до 9 км)";
      break;
    case "HZ":
      string = "мгла (видимость менее 10 км)";
      break;
    case "FU":
      string = "дым (видимость менее 10 км)";
      break;
    case "DS":
      string = "пыльная буря (видимость менее 10 км)";
      break;
    case "SS":
      string = "песчаная буря (видимость менее 10 км)";
      break;
    default:
      string = "тихо, спокойно";
  }
  return string;
}

console.log(showWeather());
