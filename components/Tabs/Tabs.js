
class TabLink {
  constructor(linkItem) {
    this.element = linkItem; // CORRECT    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab; // CORRECT
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`); // CORRECT
    // Using the Item element, create a new instance of the TabItem class
    // basing this line on th line  this.tabContent = new Content(this.tabContent);
    this.tabItem = new TabItem(this.itemElement); // CORRECT
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => {
      this.select();
    })
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll(".tabs-link"); // running through my head the whole time was "GLOBALS ARE EVIL!!"
    console.log(links);
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(link => {
      console.log("array is running...");
      link.classList.remove("tabs-link-selected"); // it seems to be not working :/
    });

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add("tabs-link-selected");
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
    console.log("ref1: " + this.element);
    console.log("TabItem created");
  }

  select() {
    // Select all items elements from the DOM
    let items = document.querySelectorAll(".tabs-item");
    // Remove the class "tabs-item-selected" from each element
    items.forEach((item) => {
      item.classList.remove("tabs-item-selected");
    });
    // Add a class named "tabs-item-selected" to this element 
    console.log("reference " +this.element);
    this.element.classList.add("tabs-item-selected");
  }
}


// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll(".tabs-link"); // spent over an hour debugging cos of this typo
// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map(link => { return new TabLink(link); });

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
links[0].select();