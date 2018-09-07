import { TabItem } from './TabItem.js'

class TabLink {
  constructor(element) {
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => { this.select() });
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');
    console.log(links)

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach( el => {
      el.classList.remove('tabs-link-selected');
    });

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
    console.log('Selected!');
  }
}

// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll('.tabs-link'); // Selected .tabs class at first which breaks the whole thing 🤷🏼‍♂️

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map( (tab) => new TabLink(tab));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
links[0].select();

/*
- This article was very helpful: https://medium.com/@mattlag/es6-modules-getting-started-gotchas-2ad154f38e2e
- Obvious in hindsight, but you only need to export classes that will be used in a different file.
- In this case, only TabItem needs to be exported and then imported into TabLink.js
- Initially had the bottom three lines of this file in the TabItem.js file which was causing an error
since TabLink couldn't be used there. */
