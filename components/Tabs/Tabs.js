class TabLink {
  constructor(element) {
    /*-- DOM selectors -----------------------------*/
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    /*-- connect sister component ------------------*/
    this.tabItem = new TabItem(this.itemElement);
    /*-- event listeners ---------------------------*/
    this.element.addEventListener('click', () => this.select());
  };

  select() {
    // Get all of the elements with the tabs-link class
    let links = document.querySelectorAll('.tabs-link');
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(link => link.classList.remove('tabs-link-selected'));
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all items elements from the DOM
    const tabItems = document.querySelectorAll('.tabs-item');
    // Remove the class "tabs-item-selected" from each element
    Array.from(tabItems).forEach(tabItem => tabItem.classList.remove('tabs-item-selected'));
    // Add a class named "tabs-item-selected" to this element 
    this.element.classList.add('tabs-item-selected');
  }
}

let links = document.querySelectorAll('.tabs-link');
links = Array.from(links).map(link => new TabLink(link));

links[0].select();