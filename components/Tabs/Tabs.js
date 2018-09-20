
class Tabs {
  constructor(element) {
    this.element = element;
    this.links = this.element.querySelectorAll(".tabs-link");
    this.links = Array.from(this.links).map( link => new TabLink(link, this) );
    if (this.links) {
      this.links[0].select();
    }
  }
  deselectCurrent() {
    if (this.selectedTab) {
      this.selectedTab.deselect();
    }
  }
  redefineSelectedTab(subElement) {
    this.selectedTab = subElement;
  }
}

class TabLink {
  constructor(element, parent) {
    this.element = element;
    this.parent = parent;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener("click", (event) => this.clickSelect(event));
  };

  select() {
    // Get all of the elements with the tabs-link class
    // const links = document.querySelectorAll(".tabs-link");

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach(link => {
    //   link.classList.remove("tabs-link-selected");
    // });

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add("tabs-link-selected");
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
    this.parent.redefineSelectedTab(this);
  }

  clickSelect() {
    this.parent.deselectCurrent();
    this.select();
  }

  deselect() {
    this.element.classList.remove("tabs-link-selected");
    this.tabItem.deselect();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all items elements from the DOM
    // const contents = document.querySelectorAll(".tabs-item");
    // Remove the class "tabs-item-selected" from each element
    // Array.from(contents).forEach(item => {
    //   item.classList.remove("tabs-item-selected");
    // });
    // Add a class named "tabs-item-selected" to this element 
    this.element.classList.add("tabs-item-selected");
    TweenLite.from(this.element, 2, {opacity: 0});
  }

  deselect() {
    TweenLite.to(this.element, 2, {opacity: 0, onComplete: function() {
      this.element.classList.remove("tabs-item-selected");
    }});
    // this.element.classList.remove("tabs-item-selected");
  }
}

// START HERE: create a reference to the ".tabs" classes
// let links = document.querySelectorAll(".tabs-link");

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
// links = Array.from(links).map( link => new TabLink(link) );

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
// links[0].select();

const tabController = new Tabs(document.querySelector(".tabs"));