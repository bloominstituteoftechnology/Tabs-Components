
class TabLink {
  constructor(element){
    // Assign this.element to the passed in DOM element
    // this.element;
    this.element = element;

    // Get the custom data attribute on the Link
    // this.data;
    this.data = this.element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    this.itemElements = document.querySelectorAll(`.tabs-item[data-tab${this.data}]`);

    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.tabItem = new TabItem(this.itemElement);


    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () =>{
        this.select();
    })
  };

  select() {
    // Get all of the elements with the tabs-link class
    // const links;
    const links = document.querySelectorAll('.tabs-link');
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();
    Array.from(links).forEach(element => element.classList.remove('tabs-link-selected'));

    // Add a class named "tabs-link-selected" to this link
    // this.element;
    this.element.className = 'tabs-link tabs-link-selected';

    let moreItems = document.querySelectorAll('.tabs-item');

    let cur = this.data;

    for (let i = 0; i < moreItems.length; i++){
      if (i === (cur - 1)){
        moreItems[i].className = 'tabs-item-selected tabs-item';
      }else {
        moreItems[i].className = 'tabs-item'
      }
    }
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
    this.element = element;

  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;
    const items = document.querySelectorAll('.tabs-item');
    // Remove the class "tabs-item-selected" from each element
    Array.from(items).forEach(element => element.className = 'tabs-item');
    console.log(this.element);

    // Add a class named "tabs-item-selected" to this element
    //this.element;
    this.element.className = 'tabs-item-selected tabs-item';
  }
}

/* START HERE:

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

var links = document.querySelectorAll('.tabs-link').forEach(element => new TabLink(element));
