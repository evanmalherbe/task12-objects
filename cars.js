// Task 12 - Compulsory task
/* I used the following websites to figure out how to complete this task (but the examples provided for the task
were the most useful):
Objects - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
Objects - https://www.w3schools.com/js/js_objects.asp
How to store images in object - https://stackoverflow.com/questions/2395765/store-images-in-javascript-object/2395830
Dialogs - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
Dialogs - https://www.w3schools.com/tags/tag_dialog.asp
Setting an attribute on an element - https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
*/

// Object constructor function to create car objects for this task
function carConstructor(make, model, colour, image, regNumber, price) {
    this.make = make;
    this.model = model;
    this.colour = colour;
    this.image = image;
    this.regNumber = regNumber;
    this.price = price;
}

// Populate 5 objects with 5 different cars' info using constructor function
let car1 = new carConstructor("BMW", "M3", "black", "images/bmw.jpg", "NU20109", "R 1.2 million");
let car2 = new carConstructor("Porsche", "Carrera", "black", "images/porsche.jpg", "ND12345", "R 2.2 million");
let car3 = new carConstructor("Fiat", "Pinto", "red", "images/fiat.jpg", "ND09876", "R 210 000");
let car4 = new carConstructor("Bugatti", "Veyron", "red", "images/veyron.jpg", "NU29293", "R 5 million");
let car5 = new carConstructor("Cadillac", "187", "red", "images/oldtimer.jpg", "NU87653", "R 750 000");

let carArray = [car1, car2, car3, car4, car5]; // Put all 5 car objects into an array to make them easier to handle

// Main function that is called when the page loads - writes images and car info to page.
function displayInfo() {
    // Use forEach method to cycle through array of car objects and write images and car info to page for each car
    carArray.forEach(function(theCar) {
        let selectDiv = document.getElementById("carDisplay");
        let createImg = document.createElement("img");
        let createDiv = document.createElement("div");
        let createLineBreak = document.createElement("br");

        createImg.src = theCar.image; // write source of image to img element (using info from each of the car objects)
        createImg.alt = theCar.make + " " + theCar.model; // Write alt text for each car to img element
        createImg.className = "carPics"; // assign each car image to the class "carPics" to make css styling easy

        /* Add the showMore() method to each car object. I really struggled with this, as I was trying to add this
        method to the object in the beginning, when I added all the other values. The problem was, it kept 
        giving me an error saying "showMore() method is not defined" or something. I'm not sure of the correct
        terminology for this, but it seems like it didn't recognise it because it was "out of scope" (that's my
        understanding of it. The same as when a variable is declared inside a function and is not recognised 
        outside of the function.)  */

        theCar.showMore = function () {
            let createDialog = document.createElement("dialog");
            createDialog.innerHTML = JSON.stringify(theCar);
            // create a dialog element with the contents of each car object (all values in the object).
            createDialog.setAttribute("open", "open"); // struggled to make this work until I added this attribute.
            selectDiv.appendChild(createDialog); // Add/append the dialog to the parent div "carDisplay"
        }

        // Add event listener to each image and call showMore() method when user clicks on image
        createImg.addEventListener("click", function (callMethod) {
            theCar.showMore();
        });

        // Add text next to each car image with info from that cars object
        createDiv.innerHTML = "This vehicle is a " + theCar.make + " " + theCar.model + ".";

        // append images, divs containing text and line breaks to parent div "carDisplay"
        selectDiv.appendChild(createImg);
        selectDiv.appendChild(createDiv);
        selectDiv.appendChild(createLineBreak);

    }); // End of forEach loop
} // End of displayInfo() function