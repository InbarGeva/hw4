console.log("Example 2");

const currentTemp = Number(prompt("please input the current temperture in fahrenheit:"));

if (currentTemp == 32) {
    alert("32 degrees fahrenheit = 0 degrees celsius ");
} else if (currentTemp == 212) {
    alert("Water boiling temperature is 212 Fahrenheit or 100 Celsius");
} else {
    const convert = (currentTemp - 32)*5/9 
    alert(`Temperature of ${currentTemp} degrees fahrenheit is equivalent to ${convert} degrees celsius`)
}


