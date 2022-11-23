// create function for the various elements

function createElement (tagElement,classElement,textElement) {
    tagElement = document.createElement(tagElement);
    tagElement.classList.add(classElement);
    textElement = document.createTextNode(textElement);
    tagElement.appendChild(textElement);
    return tagElement;
}


// container with add button
const containerAdd = createElement("div", "containerAdd","");
document.body.appendChild(containerAdd);

const add = createElement("button", "add", "+");
containerAdd.appendChild(add);

// container with title, output, reset button, light and negative numbers button
const container = createElement("div", "container","");
document.body.appendChild(container);

// title
const title = createElement("h1", "title", "Counter");
container.appendChild(title);

// display output
const output = createElement("div", "output","");
container.appendChild(output);

//containerButton with reset button, light and light button (for negative numbers)
const containerButton = createElement("div", "containerButton","");
container.appendChild(containerButton);

// reset
const reset = createElement("button", "reset", "Reset");
containerButton.appendChild(reset);

//light and lightButton
const light = createElement("div", "lightOff", "");
light.classList.add("lightOn");
containerButton.appendChild(light);

const lightButton = createElement("button", "lightButton", "negative numbers");
containerButton.appendChild(lightButton);

// container with remove button
const containerRemove = createElement("div", "containerRemove","");
document.body.appendChild(containerRemove);

const remove = createElement("button", "remove","-");
containerRemove.appendChild(remove);

// counter
let counter = 0;
output.textContent = counter;

// event to turn the light on and off 
document.addEventListener("click",(event) => {
    let target = event.target;
    if (target == lightButton && light.classList.contains("lightOn") ) {
        light.classList.remove("lightOn");
        light.classList.add("lightOff");
} else if (target == lightButton && light.classList.contains("lightOff")) {
    light.classList.remove("lightOff");
    light.classList.add("lightOn");
}
})

// event with and without negative numbers
document.addEventListener("click",(event) => {
let target = event.target;
 if (target == add) {
    counter ++;
    output.textContent = counter;
} else if (target == remove) {
    if (light.classList.contains("lightOn")) {
        counter --;
        output.textContent = counter;
    } else {
        if ( counter > 0) {
            counter --;
            output.textContent = counter;
        }
    }
} else if (target == reset) {
    counter = 0;
    output.textContent = counter;
} 
});



