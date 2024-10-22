let addtodobutton = document.getElementById('AddtoDo');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputfield');

// Add event listener for 'click' to add a new to-do item
addtodobutton.addEventListener('click', function() {
    // Create a new 'p' element
    var paragraph = document.createElement('p');
    paragraph.classList.add("paragraph-styling");
    // Set the inner text to the input field's value
    paragraph.innerText = inputfield.value;
    // Append the new paragraph to the container
    todocontainer.appendChild(paragraph);
    // Clear the input field
    inputfield.value = "";

    // Add strike-through text when paragraph is clicked
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    });

    //'dblclick' to remove the paragra`ph on double-click
    paragraph.addEventListener('dblclick', function() {
        todocontainer.removeChild(paragraph);
    });
});
