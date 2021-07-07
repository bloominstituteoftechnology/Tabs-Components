class Tabs {
  constructor (element) {
    // assign this.element to passed in DOM element
    this.element = element;
    // get a node list of all tabs-links elements
    this.tabsElements = document.querySelectorAll(".tabs-link");
    // console.log("this.tabsElements", this.tabsElements);
    // create an array of TabLink objects from the tabsElements
    this.tabLinkObjs = Array.from(this.tabsElements, element => new TabLink(element));
    // console.log(this.tabLinkObjs);
    // store the data property of the selected TabLink
    this.tabSelection = null;
    this.tabLinkObjs.forEach(tabLink => {
      if (tabLink.element.classList.contains("tabs-link-selected")) {
        this.tabSelection = tabLink.data;
      }
    });
    // console.log("tabSelection = ", this.tabSelection);
  }

  deselectPrevious(newSelection) {
    // deselect previous selection
    this.tabLinkObjs.forEach(tabLink => {
      if(tabLink.data === this.tabSelection) {
        tabLink.deselect();
      }
    });
    // store new selection
    this.tabSelection = newSelection;
  }
}

class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    // console.log(this.data);
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    // console.log(this.itemElement);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    // console.log(this.tabItem);
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => {this.select()});
    // return created TabLink to Tabs
    // console.log(this);
  };

  select() {
    // Get all of the elements with the tabs-link class
    // const links = document.querySelectorAll(".tabs-link");
    // console.log(links);
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach((link) => link.classList.remove("tabs-link-selected"));

    // remove previously selected link (calls tabItem.deselect())
    tabs.deselectPrevious(this.data);
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add("tabs-link-selected");
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
  deselect() {
    // deselect this.element, deselect associated tabItem
    this.element.classList.remove("tabs-link-selected");
    this.tabItem.deselect();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // console.log("here");
    this.element =  element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items = document.querySelectorAll(".tabs-item");

    // Remove the class "tabs-item-selected" from each element
    // items.forEach(item => item.classList.remove("tabs-item-selected"));
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add("tabs-item-selected");
  }
  deselect() {
    // deselect this.element
    this.element.classList.remove("tabs-item-selected");
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

// links = document.querySelectorAll(".tabs-link").forEach((tabLink) => new TabLink(tabLink));

tabs = new Tabs(document.querySelectorAll(".tabs"));