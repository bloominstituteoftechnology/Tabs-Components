
class TabLink {
  constructor(element) {
    this.element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tabs
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector("div[.tabs-item].this.data");
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(element);
    
    // Add a click event listener on this instance, calling the select method on click
    this.tabItem.addEventListener('click', () => {
      
    this.select()
    });
  

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll(".tab-links");

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(function(){
      links.classList.remove('.tabs-link-selected')
    });

    // Add a class named "tabs-link-selected" to this link
    this.element = document.querySelectorAll('.tabs-link-selected');
    
    // Call the select method on the item associated with this link
    
  }
}

class TabItem {
  constructor(element) {
    this.element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // Remove the class "tabs-item-selected" from each element
    // Add a class named "tabs-item-selected" to this element 
    var tabsItem = document.querySelectorAll(".tabs-item");
    Array.from(tabsItem).forEach(function(){
      tabsItem.classList.remove(".tabs-item-selected")
    });
    this.element = document.querySelector(".tabs-item-selected");
  }
}


// START HERE: create a reference to the ".tabs-link" class
let links = document.querySelectorAll(".tab-links");

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map(links => new TabLink(links));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
