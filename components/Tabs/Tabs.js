class TabLink {
  constructor(element) {
    this.element = element;
    // grab dataset attribute
    this.data = this.element.dataset.tab;
    // grab dataset from html
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    // create new instance of TabItem from itemElement data set grab
    this.tabItem = new TabItem(this.itemElement);
    //console.log(this.itemElement);
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', (event) => {
      this.select();
    });
  };

  select(event) {
    // Get all of the elements with the tabs-link class
    let links = document.querySelectorAll('.tabs-link');
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    links = Array.from(links).forEach(items => items.classList.remove('tabs-link-selected'));
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');

    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {

    let items = document.querySelectorAll('.tabs-item');
    items = Array.from(items).forEach(item => item.classList.remove('tabs-item-selected'));
    this.element.classList.add('tabs-item-selected');
    //console.log(items);
    // Select all items elements from the DOM
    // Remove the class "tabs-item-selected" from each element
    // Add a class named "tabs-item-selected" to this element
  }
}
// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll('.tabs-link');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item.
links = Array.from(links).map(links => new TabLink(links));
// console.log(links);
// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
links[0].select();