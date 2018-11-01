
class TabLink {
  constructor(element) {
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.content[data-tab='${this.itemElement}']`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.tabContent);
    
    // Add a click event listener on this instance, calling the select method on click

    this.link.addEventListener('click', () => { this.select()
    
    }); 

  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelector(".tabs-link");

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(element => new Tablink(element));

    // Add a class named "tabs-link-selected" to this link
    this.element =this.dataset.tabs-link-selected;
    
    // Call the select method on the item associated with this link

  }
}

class TabItem {
  constructor(element) {
    this.element= element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // Remove the class "tabs-item-selected" from each element
    // Add a class named "tabs-item-selected" to this element 
  }
}


// START HERE: create a reference to the ".tabs-link" class
let links = document.querySelectorAll(".tabs-links");

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map( element => new TabLink(element));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array