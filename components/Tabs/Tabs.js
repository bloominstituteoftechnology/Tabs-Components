
class TabLink {
  constructor(lambLinks) {
    this.lambLinks = lambLinks;
    
    // Get the custom data attribute on the Link
    this.data = this.lambLinks.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`tabs-link[data-tab="${this.data}"]`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.lambLinks.addEventListener('click', () => { this.select() });
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll(".tabs-link");

    // Using a loop or the forEach method to remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(links.classList.remove("tabs-link-selected");

    // Add a class named "tabs-link-selected" to this link
    this.links.classList.add("tabs-link-selected");
    
    // Call the select method on the item associated with this link
    select.call(links);

  }
}

class TabItem {
  constructor(itemElement) {
    this.itemElement = itemElement;
  }

  select() {
    const tabs = document.querySelectorAll(".tabs-item");
    Array.from(tabs).forEach(tabs.classList.remove("tabs-link-selected");
    this.tabs.classList.add("tabs-link-selected");
    // Select all items elements from the DOM
    // Remove the class "tabs-item-selected" from each element
    // Add a class named "tabs-item-selected" to this element 
  }
}


// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll(".tabs");

// Following the code in the Dropdown file, iterate through the array you created above creating a new 
//instance of the TabLink class for each item. 
links = Array.from(links).map(lambLinks => new TabLink(lambLinks))

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array




