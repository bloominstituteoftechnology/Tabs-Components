class Tabs {
  constructor() {
    this.links = document.querySelectorAll(".tabs-link");
    this.links = Array.from(this.links).map(item => {
      item = new TabLink(item, this);
      return item;
    });
    this.links[0].select();
    this.selected = this.links[0]; 
  }
}

class TabLink {
  constructor(element, controller) {
    this.element = element;
    this.controller = controller;
    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener("click", () => {this.select()})
  };

  select() {
    /* Using deselect method
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(item => {
      item.classList.remove('tabs-link-selected');
    });

    
    */
    this.deselect();
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    

    // Call the select method on the item associated with this link
    this.tabItem.select();
    this.controller.selected = this.element;
  }

  deselect() {
    const links = document.querySelectorAll('.tabs-link');
    Array.from(links).forEach(item => {
      
      item.classList.remove('tabs-link-selected');
    });
  }
  
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    /* Using deselect method
    // Select all items elements from the DOM
    const tabItems = document.querySelectorAll('.tabs-item');
    // Remove the class "tabs-item-selected" from each element
    Array.from(tabItems).forEach(item => {
      item.classList.remove('tabs-item-selected');
    });
    */
    this.deselect();
    // Add a class named "tabs-item-selected" to this element 
    this.element.classList.add('tabs-item-selected');
  }

  deselect() {
    const tabItems = document.querySelectorAll('.tabs-item');
    Array.from(tabItems).forEach(item => {
      item.classList.remove('tabs-item-selected');
    });
  }
}


// START HERE: create a reference to the ".tabs" classes
// let links = document.querySelectorAll(".tabs-link");
let tabs = new Tabs();


// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
/*
links = Array.from(links).map(item => {
      item = new TabLink(item);
      console.log(item);
      return item;
    });
*/

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array

//links[0].select();
tabs.links[0].select();