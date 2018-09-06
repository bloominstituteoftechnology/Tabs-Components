
// class TabLink {
//   constructor(element) {
//     this.element = element;
    
//     // Get the custom data attribute on the Link
//     this.data = this.element.dataset.tab;
    
//     // Using the custom data attribute get the associated Item element
//     this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.tab}"]`);

//     // Using the Item element, create a new instance of the TabItem class
//     this.tabItem = new TabItem(this.itemElement);
    

//     // Add a click event listener on this instance, calling the select method on click
//     this.element.addEventListener('click', () => {this.select()})
//   };

//   select() {
//     // Get all of the elements with the tabs-link class
//     let links = document.querySelectorAll('.tabs-link');
    
//     // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
//     Array.from(links).map((element) => element.classList.remove('tabs-link-selected'));

//     // Add a class named "tabs-link-selected" to this link
//     this.element.classList.add('tabs-link-selected');

//     // Call the select method on the item associated with this link
//     this.element.addEventListener('click', () => {this.select()})
//   }
// }

// class TabItem {
//   constructor(element) {
//     this.element = element;
//   }

//   select() {
//     // Select all items elements from the DOM
//     // Remove the class "tabs-item-selected" from each element
//     // Add a class named "tabs-item-selected" to this element 
//   }
// }


// // START HERE: create a reference to the ".tabs" classes
// let links = document.querySelectorAll(".tabs");

// // Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
// links = Array.from(links).map((element,index) => {
//   return new TabLink(element);
// });

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array


class TabLink {
  constructor(element) {
    this.element = element;
    this.tab = this.element.dataset.tab;
    // console.log(this.tab)
    this.tabsItem = document.querySelector(`.tabs-item[data-tab="${this.tab}"]`);
    
    this.tabsItemClass = new TabItem(this.tabsItem);
    this.element.addEventListener('click', () => {this.select()});
  }

  select(){
    this.tabsItemClass.selectToggle();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  selectToggle() {
    this.element.classList.toggle('tabs-item-selected')
  }
}





let links = document.querySelectorAll('.tabs-link');
// console.log(links)

links = Array.from(links).map((element,index) => {return new TabLink(element)});
// console.log(links)