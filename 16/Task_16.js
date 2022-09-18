function temperatureConverter(celsius) {
    var farenheit = celsius * 1.8 + 32;
    var kelvin = celsius + 273.15;
    return [farenheit, kelvin];
}
console.log(temperatureConverter(100));