
class TabLink {
  constructor(element) {
    this.element=element;
    
    // Get the custom data attribute on the Link
    this.data=element.dataset.tab;
    // Using the custom data attriute get the associated Item element
    this.itemElement=document.querySelector(`.tabs-items [data-tab="${this.data}"]`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem=new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', this.select.bind(this))
  };

  select() {
    // Get all of the elements with the tabs-link class
  //na, already selected in ancestor scope

    // // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(function(link) {
      link.element.classList.remove("tabs-link-selected");
    });

    // // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    
    // // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element=element;
  }

  select() {
    // Select all items elements from the DOM
    let allItems=document.querySelectorAll(".tabs-item");
    allItems.forEach(function(item){item.classList.remove("tabs-item-selected")})
    // Remove the class "tabs-item-selected" from each element
    // Add a class named "tabs-item-selected" to this element 
    this.element.classList.add("tabs-item-selected");
  }
}


// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll(".tabs-link");


// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map(tab =>new TabLink(tab));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array

links[0].select();