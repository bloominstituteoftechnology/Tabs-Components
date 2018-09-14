
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


// TabLink classes and properties
class TabLink {
  constructor(element) {
    this.element = element;
    //grab each data-tab attribute in each tabs-link, set to this.tab (TabLink instance's key property called tab)
    this.tab = this.element.dataset.tab;
    //grab each data-tab attribute in each tabs-item, set to this.tabsItem; ties Link <--> Item; set all to tabsItem variable
    this.tabsItem = document.querySelector(`.tabs-item[data-tab="${this.tab}"]`);
    //create new instances of TabItem, pass in each link's tabsItem, set all to variable tabsItemClass
    //each new TabLink instance also creates instance of TabItem (simultaneously)
    this.tabsItemClass = new TabItem(this.tabsItem);
    //add event listener to each instance of TabLink that, once clicked, calls the select() function
    this.element.addEventListener('click', () => {this.select()});
  }

  select(){
    //select function of TabLink, when called, also calls the selectToggle() function 
    // that belongs to each instance of TabItem
    this.tabsItemClass.selectToggle();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  selectToggle() {
    // grabs nodeList containing all .tabs-item classes (all content in tabs-item) 
    let links = document.querySelectorAll('.tabs-item');
    // convernt nodeList to array, put map method, remove 'tabs-item-selected' from each element in this array
    // this removes any pre-existing content in each tab, but removing .tabs-item-selected class which is "display: block"
    Array.from(links).map((element) => element.classList.remove('tabs-item-selected'));
    // once previous content is removed, toggle (on) 'tabs-item-selected'
    this.element.classList.toggle('tabs-item-selected');
  }
}

// grab all .tabs-link classes; convert nodeList into array, map over elements in array to create new instance of TabLinks
let links = document.querySelectorAll('.tabs-link');
links = Array.from(links).map((element,index) => {return new TabLink(element)});

