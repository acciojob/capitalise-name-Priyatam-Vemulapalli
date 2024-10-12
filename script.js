//your JS code here. If required.
const myElement = document.getElementById("fname");

myElement.addEventListener("blur", function () {
	myElement.value = myElement.value.toUpperCase();
});