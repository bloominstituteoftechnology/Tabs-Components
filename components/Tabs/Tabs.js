class Tabs {
  constructor(element) {
    this.element = element;
    console.log(this.element);
    this.linkElement = this.element.children;
    console.log(this.linkElement)
    this.tabLink = Array.from(this.linkElement).map(link => new TabLink(link));
    console.log(this.tabLink)
    // this.selected = document.querySelector('.tabs-link-selected');
    // console.log(this.selected);
  }
}

class TabLink {
  constructor(element) {
    this.element = element;
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`)
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.select());

    // this.element.addEventListener('click', () => this.deselect());
  };

  select() {
    // Get all of the elements with the tabs-link class
    // const links = document.querySelectorAll('.tabs-link');
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach(link => { link.classList.remove("tabs-link-selected");
    // });
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected')
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }

  // deselect() {
  //   this.element.classList.remove('tabs-link-selected');
  //   this.tabItem.deselect();
  // }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const tabs = document.querySelectorAll('.tabs-item');
    // Remove the class "tabs-item-selected" from each element
    // Array.from(tabs).forEach(tab => tab.classList.remove('tabs-item-selected'))
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
  }

  // deselect() {
  // }
}


// START HERE: create a reference to the ".tabs-link" class
let links = document.querySelectorAll('.tabs-link');
let tab = document.querySelector('.tabs-links');
tab = new Tabs(tab);
console.log(tab);
// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map(link => new TabLink(link));
// tab = Array.from(tab.children).map(tab => new Tabs(tab));
// console.log(tab);

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array