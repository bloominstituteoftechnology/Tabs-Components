/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/


class Tabs {
  constructor(element) {
    this.element = element
    this.links = this.element.querySelectorAll(".tabs-links .tabs-link")
    this.tabLinks = Array.from(this.links).map(el => new TabLink(el, this));
    this.selected = this.tabLinks[0];
    }
    select(newTabLink) {
      this.selected.deselect();
      newTabLink.select()
      this.selected = newTabLink;
    }
  }
  class TabLink {
    constructor(element, tabs) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    this.tabs = tabs;
    console.log(element);

    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    this.itemElement = this.tabs.element.querySelector(`.tabs-item[data-tab="${this.data}"]`);

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
  
    // Add a click event listener on this instance, calling the select method on click
    
    element.addEventListener('click', () => this.tabs.select(this));
    // element.addEventListener('click', () => console.log(this.tabs.select(this)));
  };
  
  select() {
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add("tabs-link-selected");
    // Call the select method on the item associated with this link
    this.tabItem.select();
    }
    deselect() {
    // Get all of the elements with the tabs-link class
    
    this.element.classList.remove('tabs-link-selected')
    this.tabItem.deselect();
  }
  }
  
  class TabItem {
    constructor(element) {
      // Assign this.element to the passed in element
      this.element = element;
    }
  
    select() {
      // Add a class named "tabs-item-selected" to this element
      this.element.classList.add('tabs-item-selected');
      }
    deselect () {
      // Select all ".tabs-item" elements from the DOM
      // const items = document.querySelectorAll('.tabs-item');
      
      // Remove the class "tabs-item-selected" from each element
      // Array.from(items).forEach(item => item.classList.remove('tabs-item-selected'));
      this.element.classList.remove('tabs-item-selected');
    }
  }
  
  
 
  const tabs = document.querySelector('.tabs');
  new Tabs(tabs)
  // links.forEach(link => new Tab(link));
  // // console.log(links);