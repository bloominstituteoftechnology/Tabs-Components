class Tabs {
  constructor(element){
    this.element = element;
    this.links = this.element.querySelectorAll('.tabs-link');
    this.links = Array.from(this.links).map ( link =>
        new TabLink(link, this));
    this.active = this.links[0];
    this.make();
  }
  make(){
    this.active.select();
  }
  activate(newActive){
    this.active.deselect();
    this.active = newActive;
  }
  getTab(data){
    return this.element.querySelector(`.tabs-item[data-tab='${data}']`);
  }
}


class TabLink {
  constructor(element, parent) {
    this.element = element;

    //for stretch:
    this.tab = parent;

    // Get the custom data attribute on the Link
    // this.data = element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    // this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);

    // Using the Item element, create a new instance of the TabItem class
    //for stretch:
    this.tabItem = parent.getTab(this.element.dataset.tab);
    //base assignment
    this.tabItem = new TabItem(this.tabItem);

    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => {
      this.tab.activate(this);
      this.select()
    });
  };

  select() {
    // Get all of the elements with the tabs-link class
    // const links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach( item =>
    //   item.classList.remove('tabs-link-selected'));

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');

    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
  deselect(){
    this.element.classList.remove('tabs-link-selected');
    this.tabItem.deselect();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all items elements from the DOM
    // let allItems = document.querySelectorAll('.tabs-item');
    // Remove the class "tabs-item-selected" from each element
    // Array.from(allItems).forEach( item =>
    //   item.classList.remove('tabs-item-selected'));
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
  }
  deselect(){
    this.element.classList.remove('tabs-item-selected');
  }
}


// START HERE: create a reference to the ".tabs" classes
//base assignment:
// let links = document.querySelectorAll('.tabs-link');

//stretch version:
let tabs = document.querySelectorAll('.tabs');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item.
//base assignment:
// links = Array.from(links).map( link =>
//   new TabLink(link));

//stretch version:
tabs = Array.from(tabs).map( tab =>
  new Tabs(tab));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
//base assignment:
// links[0].select();
