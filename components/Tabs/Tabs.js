
class TabLink {
  constructor(element) {
    this.element = element;
    console.log(this.element);
    // Get the custom data attribute on the Link
    this.data = this.element.querySelector(".tabs-link");
    console.log("dataset: " + this.data);
    // Using the custom data attribute get the associated Item element
    this.itemElement = this.data.dataset;
    console.log(this.itemElement);
    // Using the Item element, create a new instance of the TabItem class
    this.itemElement = new TabLink(tab);
    
    // Add a click event listener on this instance, calling the select method on click
    this.tabItem.addEventListener("click", () => {this.select()});
    }

  select() {
    // Get all of the elements with the tabs-link class
    const links = this.element.querySelectorAll("tabs-link");

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach( function() {
       this.links.classList.remove("tabs-link-selected")});

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add("tabs-link-selected");
    
    // Call the select method on the item associated with this link

  }
}

class TabItem {
  constructor(element) {
    this.element;
  }

  select() {
    // Select all items elements from the DOM
    let allItems = document.querySelectorAll("*");
    // Remove the class "tabs-item-selected" from each element
    this.allItems.classList.remove("tabs-item-selected");
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add("tabs-item-selected") 
  }
}


// START HERE: create a reference to the ".tabs" classes
let tabs = document.querySelectorAll(".tabs");

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
tabs = Array.from(tabs).map(tab => new TabLink(tab));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array