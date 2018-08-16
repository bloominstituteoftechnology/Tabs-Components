

class TabLink {
  constructor(tabLink) {
    this.element = tabLink;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-link[data-tab="${this.data}"]`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new this.tabItem();
    console.log(this.tabItem);
    
    // Add a click event listener on this instance, calling the select method on click
    this.tabItem.addEventListener('click', (e) => {
      console.log("Calling the select method.");
      this.select();
    })
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('tabs-link');
    console.log(links);

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(function(link) {
      link.classList.remove('tabs-link-selected');
    });

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    
    // Call the select method on the tabs-item associated with this link
    this.element.element.select();
  }
}

class TabItem {
  constructor(tabElement) {
    this.element = tabElement;
  }

  select() {
    // Select all tabs-item elements from the DOM
    const tabItems = document.querySelectorAll('.tabs-item');
    console.log(tabItems);

    // Remove the class "tabs-item-selected" from each element
    this.element.classList.remove('tabs-item-selected');

    // Add a class named "tabs-item-selected" to this element 
    this.element.classList.add('tabs-item-selected');
  }
}


// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll('.tabs-link');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map( links => new TabLink(links));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
