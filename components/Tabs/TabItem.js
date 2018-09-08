// import { TabLink } from './TabLink.js'

export class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all items elements from the DOM
    let tabItems = document.querySelectorAll('.tabs-item');
    console.log(tabItems)
    // Remove the class "tabs-item-selected" from each element
    Array.from(tabItems).forEach( el => {
      el.classList.remove('tabs-item-selected');
    });
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected'); 
  }
}