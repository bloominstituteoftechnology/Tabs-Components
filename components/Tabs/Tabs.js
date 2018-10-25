
class Tabs{
  constructor(element){
    this.element = element;
    this.currentLink = new TabLink(this.element);

    this.element.addEventListener('click', () => { this.deselect() });

  }
  deselect(){
    const links = document.querySelectorAll('.tabs-link');
    const items = document.querySelectorAll('.tabs-item');
    Array.from(links).forEach( link => link.classList.remove('tabs-link-selected'));
    Array.from(items).forEach( item => item.classList.remove('tabs-item-selected'));
    this.currentLink.select();
  }
}

class TabLink {
  constructor(element) {
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);

  };

  select() {
    this.element.classList.toggle('tabs-link-selected');
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.toggle('tabs-item-selected');
  }
}

// START HERE: create a reference to the ".tabs-link" class
let links = document.querySelectorAll('.tabs-link');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map( link => new Tabs(link));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
links[0].currentLink.select();

