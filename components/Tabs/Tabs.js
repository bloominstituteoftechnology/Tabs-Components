
class TabLink {
  constructor(element) {
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    console.log(this.itemElement)
    // Using the Item element, create a new instance of the TabItem class
    this.itemElement = new TabItem(this.itemElement) ; 
    console.log(this.itemElement);
    // Add a click event listener on this instance, calling the select method on click
    //this.itemElement.addEventListener('click',()=>select())
    this.element.addEventListener('click', () => { this.select() })
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll ('.tabs-link');
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(links => links.classList.remove('tabs-linkselected'));
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('.tabs-link-selected')
    //this.links.className = 'tabs-link-selected'  ;
    
    // Call the select method on the item associated with this link
    this.itemElement.select();
  }

}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    this.tabsItem = document.querySelectorAll('.tabs-item');
    // Remove the class "tabs-item-selected" from each element
    this.tabsItem.forEach(item => item.classList.remove('tabs-item-selected'));
    //this.tabsItem.classList.toggle('.tabs-item')
    this.element.classList.add('tabs-item-selected');
    // Add a class named "tabs-item-selected" to this element 
  }
}


// START HERE: create a reference to the ".tabs-link" class
let links = document.querySelectorAll('.tabs-link');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map(links => new TabLink(links))

console.log(links)
// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array