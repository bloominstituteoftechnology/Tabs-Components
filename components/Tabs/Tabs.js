
class TabLink {
  constructor(link) {
    this.link = link;
    
    // Get the custom data attribute on the Link
    this.data = this.link.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.link.addEventListener('click', () => { this.select() });
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');
    console.log(links)

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach( link => {
      link.classList.remove('tabs-link-selected');
    });

    // Add a class named "tabs-link-selected" to this link
    this.link.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
    console.log('Selected!');
  }
}

class TabItem {
  constructor(element) {
    this.itemElement = element;
  }

  select() {
    // Select all items elements from the DOM
    const tabItems = document.querySelectorAll('.tabs-items');
    console.log(tabItems)
    // Remove the class "tabs-item-selected" from each element
    Array.from(tabItems).forEach( tab => {
      tab.classList.remove('tabs-item-selected');
    });
    // Add a class named "tabs-item-selected" to this element
    this.itemElement.classList.add('tabs-item-selected'); 
  }
}


// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll('.tabs-link'); // Selected .tabs class at first which breaks the whole thing 🤷🏼‍♂️

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map( tab => new TabLink(tab));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
links[0].select();