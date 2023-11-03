function doconvert(event) { 
event.preventDefault();
    var celsius = parseFloat(document.getElementById('celsiusInput').value);

   
    if (!isNaN(celsius)) {
       
        var fahrenheit = (celsius * 9/5) + 32;

        document.getElementById('result').innerHTML = celsius + " degrees Celsius is " + fahrenheit.toFixed(2) + " degrees Fahrenheit.";
    } else {
        // Display an error message if the input is not a valid number
        document.getElementById('result').innerHTML = "Please enter a valid number for Celsius.";
    }
}