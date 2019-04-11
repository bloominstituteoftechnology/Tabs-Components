
//Tabs class controls all TabLink objects
class Tabs {
  constructor() {
    this.selectedTab;
    this.tabLinks = [];
    this.initialize(); //Method that creates all TabLink components
  }

  initialize() {
    //Get all Tab Links, store them in an array after they are instantiated as TabLink class.
    document.querySelectorAll('.tabs-link')
      .forEach(t => {
        let thisTab = new TabLink(t);
        this.tabLinks.push(thisTab);
      });
    //Set default selected tab
    this.selectedTab = this.tabLinks[0];
    //Add an event listener for every tab link
    this.tabLinks.forEach(t => {
      //use implicit binding with the arrow function to allow us to use `this` as a reference to the Tabs class that we are currently in.
      
      //We don't allow another tab to be animated or switch if one is currently animating, as this will cause two tabs to show.
      t.element.addEventListener('click', () => {
        if(this.selectedTab !== t) {
          this.selectedTab.deselect();
          t.select();
          this.selectedTab = t;
          setTimeout(() => {
          }, 1000);
        }
      });
    });
  }
}

class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    // this.element;
    this.element = element;
    // Get the custom data attribute on the Link
    // this.data;
    this.data = this.element.dataset.tab;
    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    this.itemElement = document.querySelector(`.tabs-item[data-tab = "${this.data}"]`);
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.tabItem = new TabItem(this.itemElement);
  };

  select() {
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }

  deselect() {
    this.element.classList.remove('tabs-link-selected');
    this.tabItem.deselect();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
      this.element.classList.add('tabs-item-selected');
      TweenMax.fromTo(this.element, .75, {
        opacity: 0
      }, {
        opacity: 1
      });
  }

  deselect() {
    this.element.classList.remove('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

//Create Tabs Class
let allTabs = new Tabs();