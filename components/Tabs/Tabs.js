
class Tabs{
  constructor(element){
    this.element = element;

  }
  deselect(){
    const links = document.querySelectorAll('.tabs-link');
    const items = document.querySelectorAll('.tabs-item');
    Array.from(links).forEach( link => link.classList.remove('tabs-link-selected'));
    Array.from(items).forEach( item => item.classList.remove('tabs-item-selected'));

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
    this.tabs  = new Tabs(this.element);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => { this.select() });

  };

  select() {
    // const links = document.querySelectorAll('.tabs-link');
   
    // Array.from(links).forEach( link => link.classList.remove('tabs-link-selected'));
    this.tabs.deselect();
    this.element.classList.toggle('tabs-link-selected');

    this.tabItem.select();

  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // const items = document.querySelectorAll('.tabs-item');

    // Array.from(items).forEach( item => item.classList.remove('tabs-item-selected'));

    this.element.classList.toggle('tabs-item-selected');
  }
}


// START HERE: create a reference to the ".tabs-link" class
let links = document.querySelectorAll('.tabs-link');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map( link => new TabLink(link));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
links[0].select();

