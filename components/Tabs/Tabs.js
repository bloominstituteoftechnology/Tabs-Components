class Tabs {
  constructor(tabs) {
    this.tabs = tabs;
    this.links = this.tabs.querySelectorAll('.tabs-link');
    this.links = Array.from(this.links).map(tabLink => new TabLink(tabLink, this));
    this.selected = this.links[0];
    this.links[0].select();
  }

  select(newSelected) {
    this.selected.deselect();
    this.selected = newSelected;
    newSelected.select();
  }
}

class TabLink {
  constructor(element, parent) {
    this.element = element;
    this.tabs = parent;
    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.tabs.select(this));
  };

  select() {
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }

  deselect() {
    this.element.classList.remove('tabs-link-selected');
    this.tabItem.deselect();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Add a class named "tabs-item-selected" to this element 
    this.element.classList.add('tabs-item-selected');
  }

  deselect() {
    this.element.classList.remove('tabs-item-selected');
  }
}

let tabGroups = document.querySelectorAll('.tabs');
tabGroups = Array.from(tabGroups).map(tabs => new Tabs(tabs));