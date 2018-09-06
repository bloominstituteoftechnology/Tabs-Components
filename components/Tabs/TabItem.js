import { TabLink } from './TabLink.js'

export class TabItem {
  constructor(element) {
    this.itemElement = element;
  }

  select() {
    // Select all items elements from the DOM
    const tabItems = document.querySelectorAll('.tabs-items');
    console.log(tabItems)
    // Remove the class "tabs-item-selected" from each element
    Array.from(tabItems).forEach( tab => {
      tab.classList.remove('tabs-item-selected');
    });
    // Add a class named "tabs-item-selected" to this element
    this.itemElement.classList.add('tabs-item-selected'); 
  }
}

// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll('.tabs-link'); // Selected .tabs class at first which breaks the whole thing 🤷🏼‍♂️

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map( tab => new TabLink(tab));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
links[0].select();