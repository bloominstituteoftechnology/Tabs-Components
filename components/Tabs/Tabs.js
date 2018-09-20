
class TabLink {
  constructor(element) {
    this.element;
    
    // TODO: Get the custom data attribute on the Link
    this.data;
    
    // TODO: Using the custom data attribute get the associated Item element
    this.itemElement;
    
    // TODO: Using the Item element, create a new instance of the TabItem class
    this.tabItem;
    
    // TODO: Add a click event listener on this instance, calling the select method on click

  };

  select() {
    // TODO: Get all of the elements with the tabs-link class
    const links;

    // TODO: Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach();

    // TODO: Add a class named "tabs-link-selected" to this link
    this.element;
    
    // TODO: Call the select method on the item associated with this link

  }
}

class TabItem {
  constructor(element) {
    this.element;
  }

  select() {
    // TODO: Select all items elements from the DOM
    // TODO: Remove the class "tabs-item-selected" from each element
    // TODO: Add a class named "tabs-item-selected" to this element 
  }
}


// START HERE: TODO: create a reference to the ".tabs" classes
let links = document.querySelectorAll();

// TODO: Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links)

// DO THIS LAST: TODO: Once you have created an array of TabLink instances. call select() on the first item in the array