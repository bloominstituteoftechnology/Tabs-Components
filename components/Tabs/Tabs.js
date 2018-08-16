
class TabLink {
  constructor(element) {
    this.element = element;
    //Linked each element from mapped array.
    // Get the custom data attribute on the Link
    this.linkData = this.element.dataset.tab;
    //Created link to custom data
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-link[data-tab= ${this.linkData}]`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.itemElement = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => {this.select()});
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(link);

    // Add a class named "tabs-link-selected" to this link
    this.element;
    
    // Call the select method on the item associated with this link

  }
}

class TabItem {
  constructor(element) {
    this.element;
  }

  select() {
    // Select all items elements from the DOM
    // Remove the class "tabs-item-selected" from each element
    // Add a class named "tabs-item-selected" to this element 
  }
}


// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll('.tabs-link');
//1 Created my nodeList psuedo array

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map(link => new TabLink(link));
//2 Transformed into array and created new entry for class TabLink
// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array