
class TabLink {
  constructor(link) {
    this.element = link;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tab-items[data-tab='${this.data}']`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.tabItem);
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => {this.select(event) });
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link')
    console.log(links)

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove('tabs-link-selected');
    };
  //links.forEach(classList.remove('tabs-link-selected'));

  

    // Add a class named "tabs-link-selected" to this link
   this.element.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link

  }
}

class TabItem {
  constructor(tabItem) {
    this.element = tabItem;
  }

  select() {
   let tabItemList = document.querySelectorAll('.tab-items');
   tabItemList.forEach(tabItemList.classList.remove('tabs-item-selected'));
   this.element.classList.add('tabs-link-selected');
    // Select all items elements from the DOM
    // Remove the class "tabs-item-selected" from each element
    // Add a class named "tabs-item-selected" to this element 
  }
}


// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll('.tabs-link');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map(link => new TabLink(link));

//links[1].select();


// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array 