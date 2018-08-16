export class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all items elements from the DOM
    const items = document.querySelectorAll('.tabs-item');
    // Remove the class "tabs-item-selected" from each element
    Array.from(items).forEach((item) => {item.classList.remove('tabs-item-selected')});
    // Add a class named "tabs-item-selected" to this element 
    this.element.classList.add('tabs-item-selected');
  }
}