// import { TabLink } from './TabLink.js'

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