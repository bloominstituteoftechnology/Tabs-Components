class Tabs {
  constructor(element) {
    this.element = element;
    this.tLCreation = this.element.map(link => {
      return new TabLink(link);
    });
    this.tLCreation.forEach(n => {
      n.click();
    });
  }
}

class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(
      `.tabs-items .tabs-item[data-tab='${this.data}']`,
    );
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    // Add a click event listener on this instance, calling the select method on click
  }

  click() {
    this.element.addEventListener('click', () => {
      this.select();
    });
  }

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // links.forEach(link => {
    //   link.classList.remove('tabs-link-selected');
    // });
    // Array.from(links).forEach();
    // Add a class named "tabs-link-selected" to this link
    // this.element;
    this.deSelect();
    this.element.classList.add('tabs-link-selected');
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }

  deSelect() {
    const links = document.querySelectorAll('.tabs-link');
    links.forEach(link => {
      if (link.classList.contains('tabs-link-selected')) {
        link.classList.remove('tabs-link-selected');
      }
    });
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    let items = document.querySelectorAll('.tabs-item');
    // Remove the class "tabs-item-selected" from each element
    // items.forEach(item => {
    //   item.classList.remove('tabs-item-selected');
    // });
    this.deSelect();
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
  }

  deSelect() {
    let items = document.querySelectorAll('.tabs-item');
    items.forEach(item => {
      if (item.classList.contains('tabs-item-selected')) {
        item.classList.remove('tabs-item-selected');
      }
    });
  }
}

let links = Array.from(document.querySelectorAll('.tabs-link'));
let allLinks = new Tabs(links);

//  START HERE:

// - Select all classes named ".tabs-link" and assign that value to the links variable

// - With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

// - In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter
