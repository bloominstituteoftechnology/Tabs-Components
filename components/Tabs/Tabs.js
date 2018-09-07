
class TabLink {
  constructor(element) {
    this.element = element;
    console.log("this.element: " + this.element);
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    console.log("data: " + this.data);
    
    // Using the custom data attribute get the associated Item element
    //this.itemElement = this.data.querySelector(`[data-tab]="${this.data}"]`);
    this.itemElement = this.element.querySelector(`[data-tab="${this.data}"]`);
   
    console.log("this itemelement: " + this.itemElement);
    
    // Using the Item element, create a new instance of the TabItem class
    let tabItem = new TabItem(this.itemElement);
    console.log("tabItem: " + tabItem);
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener("click", this.select());
    
  
    //this.number = this.el.dataset.number
    
    
    //this.containerElement = document.querySelector(`.container[data-number="${this.number}"]`)
   // this.containerClass = new Container(this.containerElement)
  
  
  
  
  
  
  
  }

  select() {
    // Get all of the elements with the tabs-link class
    let links = this.element.querySelectorAll(".tabs-link");

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(function(item) {
      item.classList.remove("tabs-link-selected")});

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add("tabs-link-selected");
    
    // Call the select method on the item associated with this link

  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all items elements from the DOM
    let allItems = document.querySelectorAll("*");
    console.log("allItems:" + allItems);
    // Remove the class "tabs-item-selected" from each element
    this.allItems.classList.remove("tabs-item-selected");
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add("tabs-item-selected") 
  }
}


// START HERE: create a reference to the ".tabs" classes
let tabs = document.querySelectorAll(".tabs-link");
console.log(tabs);
// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
tabs = Array.from(tabs).map(tablink => new TabLink(tablink));
console.log("tabs: " + tabs);
// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array