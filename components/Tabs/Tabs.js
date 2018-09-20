
class TabLink {
  constructor(element) {
    this.element = element;

    // Get the custom data attribute on the Linok
    // here we are getting the numbers from the data on teh tab links. Which are the tabs. These numbres corespond to the tab items or the stuff you see in the tab. We match the tab numbers with the tab items via the tab data.
    this.data = this.element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    // this.itemElement = document.querySelector('.tabs-item');
    //

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener('click', () => {
      if(this.element.classList.contains('tabs-link-selected')) {
        this.deselect()
        this.tabItem.deselect();
      } else {
        this.select()
      }
    });
    // Add a click event listener on this instance, calling the select method on click
  };

  select() {
    // Get all of the elements with the tabs-link class
    // const links =  this.element.querySelectorAll('.tabs-link');
    const links =  document.querySelectorAll('.tabs-link');
// console.log(links);
// 

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
  Array.from(links).forEach(item => {
    item.classList.remove('tabs-link-selected');

  });

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.toggle('tabs-link-selected');

    // Call the select method on the item associated with this link
    this.tabItem.select();
    // console.log(this.element.classList);

  }

  deselect() {
    this.element.classList.remove('tabs-link-selected');
  }
}

class TabItem {
  constructor(element) {
    this.element = element;

  }

  select() {
    const tabItems = document.querySelectorAll('.tabs-item')
      // console.log(tabItems);
    tabItems.forEach(item => {
      item.classList.remove('tabs-item-selected');
    });

    this.element.classList.add('tabs-item-selected');
    // console.log(this.element)

    // Select all items elements from the DOM
    // Remove the class "tabs-item-selected" from each element
    // Add a class named "tabs-item-selected" to this element 
  }

  deselect() {
    if(this.element.classList.contains('tabs-item-selected')) {
      this.element.classList.remove('tabs-item-selected');
    } 
    
  }
}


// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll('.tabs-link');
// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item.
links = Array.from(links).map(link => new TabLink(link));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
