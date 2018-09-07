
class TabLink {
  constructor(links) {
    this.element = links;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab ;
    console.log('this is the data: ', this.data);
    // Using the custom data attribute get the associated Item element
    this.itemElement = this.element.querySelectorAll(`${this.data}`);
    console.log('this is: ', this.itemElement);
    console.log(this.itemElement);
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    console.log(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click

    this.element.addEventListener('click', () => {
      this.select();
    })

  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');
    console.log(links);

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(function (){
    console.log(this);
    event.currentTarget.classList.toggle('tabs-link-selected');
    });

    // Add a class named "tabs-link-selected" to this link
    event.currentTarget.classList.toggle('tabs-link-selected');
    
    // Call the select method on the item associated with this link
console.log('I am select!')
  }
}

class TabItem {
  constructor(element) {
    this.element;
  }

  select() {
    // Select all items elements from the DOM
    // Remove the class "tabs-item-selected" from each element
    event.currentTarget.classList.toggle('tabs-item-selected');
    // Add a class named "tabs-item-selected" to this element 
  }
}

// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll('.tabs');
// console.log(links)
// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map(links => new TabLink(links))
// console.log(links);
// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array

console.log(TabLink.element, TabLink.data);