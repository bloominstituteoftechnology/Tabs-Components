
class TabLink {
  constructor(element) {
    this.element;
    
    // Get the custom data attribute on teh Link
    this.data;
    
    // Using the custom data attribute ge tthe associated Item element
    this.item;
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem;
    
    this.link.addEventListener('click', () => {
      // Call the select method you define below
    });
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links;

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    links.forEach();

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
let links = document.querySelectorAll();

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 

