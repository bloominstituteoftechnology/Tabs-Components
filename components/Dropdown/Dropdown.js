class Dropdown {
    constructor(element) {

        // Assign this.element to the dropdown element
        this.element = element;

        // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
        this.button = this.element.querySelector('.dropdown-button');
        this.button.querySelector = 'Dropdown';


        // assign the reference to the ".dropdown-content" class found in the dropdown element
        this.content = this.element.querySelector('.dropdown-content.dropdown-hidden');
        console.log(this.content);


        // Add a click handler to the button reference and call the toggleContent method.
        this.button.addEventListener('click', (event) => { this.toggleContent(event); })
    }

    toggleContent(event) {
        // console.log(this.element);
        // console.log(this.content);

        // Toggle the ".dropdown-hidden" class off and on
        this.content.classList.toggle('dropdown-hidden');
        // console.log(this.element.classList.toggle('.dropdown-hidden'));
        // if (this.content.classList.contains('.dropdown-hidden')) {
        //     this.expand.content = "DropDown";
        // } else {
        //     this.expand.content = "Close Dropdown";
        // }
    }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));
console.log('hello')