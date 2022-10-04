function temperatureConverter(celsius) {
    let farenheit = celsius * 1.8 + 32;
    let kelvin = celsius + 273.15;
    return [farenheit, kelvin];
}
console.log(temperatureConverter(100));