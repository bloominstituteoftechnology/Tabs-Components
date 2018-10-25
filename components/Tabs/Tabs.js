class Tabs {
  constructor(links) {
    this.links = links;
    let cbFunc = (index) => {
      console.log(index);
      for (let i = 0; i < this.tabLinks.length; i++) {
        if (this.tabLinks[i].element.classList.contains('tabs-link-selected')) {
          this.tabLinks[i].element.classList.remove('tabs-link-selected');
        }
      }
      this.tabLinks[index].select();
    }
    this.tabLinks = Array.from(links).map((x, index) => new TabLink(x, index, cbFunc));
  }
}

class TabLink {
  constructor(element, index, whenClicked) {
    this.element = element;
    this.whenClicked = whenClicked;
    this.index = index;

    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.whenClicked(this.index));
  };
  deselect() {
    this.element.classList.remove('tabs-link-selected');
  }
  select() {
    // // Get all of the elements with the tabs-link class
    // const links = document.querySelectorAll('.tabs-link');
    // // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach(x => x.classList.remove('tabs-link-selected'));
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
    // Select all ".tabs-item" elements from the DOM
    let tabsItems = document.querySelectorAll('.tabs-item');
    // Remove the class "tabs-item-selected" from each element
    tabsItems.forEach(x => x.classList.remove('tabs-item-selected'));
    // Add a class named "tabs-item-selected" to this element 
    this.element.classList.add('tabs-item-selected');
  }
}


// START HERE: create a reference to the ".tabs-link" class
let links = document.querySelectorAll('.tabs-link');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = new Tabs(links);

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
links.tabLinks[0].select();