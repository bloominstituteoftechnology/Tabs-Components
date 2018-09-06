
class TabLink {
  constructor(link) {
    this.element = link;

    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    console.log(this.data)
   
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}]`);
    console.log(this.itemElement);
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);

    // Add a click event listener on this instance, calling the select method on click
     this.element.addEventListener('click', () => {
       this.select()
     })
  };

  select() {
   
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');
    
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).map((tabs) => tabs.classList.remove('tabs-link-selected'));

    // Add a class named "tabs-link-selected" to this link
    tabItem.classList.toggle('tabs-link-selected');
   
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(item) {
    this.element = item;


  }

  select() { //Switch
    // Select all items elements from the DOM
   let item = document.querySelectorAll('.tabs-items');
   this.item.classList.toggle('tabs-item-selected');
    // Remove the class "tabs-item-selected" from each element
    // Add a class named "tabs-item-selected" to this element 

  }
}


// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll('.tabs-link');
// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map((link) => new TabLink(link));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array