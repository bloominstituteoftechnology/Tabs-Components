
class TabLink {
  constructor(element) {
    this.element = element;
    console.log(this.element);
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    console.log(this.data);
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    console.log(this.itemElement);
    // Using the Item element, create a new instance of the TabItem class
    this.itemElement = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method 
    //on click
    this.element.addEventListener('click', (event) => {this.select(event)}); 
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-links');

    // Using a loop or the forEach method remove the 'tabs-link-selected' 
    // class from all of the links
    Array.from(links).forEach( item => item.classList.toggle('tabs-link-selected'));

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.toggle('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.itemElement.select();

  }
}

class TabItem {
  constructor(element) {
    this.element = element;

  }

  select() {
    // Select all items elements from the DOM
    let itemElems = Array.from(document.querySelectorAll('.tabs-item'));
    // Remove the class "tabs-item-selected" from each element
    itemElems.forEach( item => item.classList.remove('tabs-item-selectd'));
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected'); 
  }
}


// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll('.tabs-link');
console.log(links);

// Following the code in the Dropdown file, iterate through the array you created 
//above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map( item => new TabLink(item) );
console.log(links);
// DO THIS LAST: Once you have created an array of TabLink instances. 
// call select() on the first item in the array

links[0].select();

