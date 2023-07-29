const celsius = document.querySelector("#celsius"),
fahrenheit = document.querySelector("#fahrenheit");

window.addEventListener("load" , () => celsius.focus());
// convert celsius to Fahrenheit whan Celsius value change
celsius.addEventListener("input", () =>{
fahrenheit.value = ((celsius.value *9) /5 +32).toFixed(2);

if (!celsius.value) fahrenheit.value = "";
})


// convert fahrenheit to celsius when fahrenheit value changes

fahrenheit.addEventListener("input", () => {
celsius.value = (((fahrenheit.value -32)*5)/9).toFixed(2);
// clear celsius input when fahrenheit input empty

if (!fahrenheit.value) celsius.value = "";
})