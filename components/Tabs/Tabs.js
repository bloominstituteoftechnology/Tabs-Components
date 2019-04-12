class Tabs {
  constructor(tabs){
    this.tabs = tabs;
    this.links = Array.from(this.tabs.querySelectorAll('.tabs-link'));
    this.links = this.links.map(link => new TabLink(link));
    //console.log(this.links[0]);
    this.selectedTab = 0;
    this.tabs.addEventListener('click', (e) => this.select(e));
  }

  select(e){
    this.selectedTab = e.target.dataset.tab - 1;
    this.links[this.selectedTab].select();
  }
 
}

class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);;
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    // this.element.addEventListener('click', () => this.select());
  };

  select() {
    // Get all of the elements with the tabs-link class
    
    const links = document.querySelectorAll('.tabs-link');
    const isSelected = this.element.classList.contains('tabs-link-selected');
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    links.forEach(el => el.classList.remove('tabs-link-selected'));

    // Add a class named "tabs-link-selected" to this link
    //this.element.classList.contains('tabs-link-selected') && this.deselect()
    !isSelected && this.element.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    const isSelected = this.element.classList.contains('tabs-item-selected');
    items.forEach(el => el.classList.remove('tabs-item-selected'));
    // Add a class named "tabs-item-selected" to this element
    if (!isSelected){
      TweenMax.fromTo(this.element, 1, {
        opacity: 0,
        x: 200
      }, 
      {
        opacity: 1,
        x: 0
      });
      this.element.classList.add('tabs-item-selected');
    }
  }
}

/* START HERE: 
- Select all classes named ".tabs-link" and assign that value to the links variable
- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList
- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter
*/

// const links = document.querySelectorAll('.tabs-link');
// links.forEach(link => link = new TabLink(link));

const tabs = document.querySelector('.tabs');
new Tabs(tabs);

