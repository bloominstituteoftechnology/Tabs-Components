
class TabLink {
  constructor(element) {
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.itemElement = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => {
      this.select();
    })
  };

  select() {
    console.log("is this working");
    // Get all of the elements with the tabs-link class
    let links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(function(item){
      item.classList.remove("tabs-link-selected");
    });

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.toggle("tabs-link-selected");
    
    // Call the select method on the item associated with this link
    this.itemElement.select();


  }
}

class TabItem {
  constructor(itemElement) {
    this.itemElement = itemElement;
  }

  select() {
    // Select all items elements from the DOM
    let itemsAll = document.querySelectorAll('.tabs-item');
    // Remove the class "tabs-item-selected" from each element
    itemsAll = Array.from(itemsAll).forEach(function(item){
      item.classList.remove("tabs-item-selected");
    })
    // Add a class named "tabs-item-selected" to this element 
    this.itemElement.classList.toggle('tabs-item-selected');
  }
}


// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll('.tabs-link');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map(element => new TabLink(element));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
// for(let i = 0; i < links.length; i++){
//   if(links[i].element.includes("tabs-link-selected") === false){
//     links[i].element.classList.toggle("tabs-item");
//   }
// }

links[0].select();

