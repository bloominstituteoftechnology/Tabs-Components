class Tabs {
  constructor(element) {
    this.element = element;
    this.links = this.element.querySelector(".tabs-link");// create a reference to the ".tabs-link" class nested in your tab object
    // This step will map over the array creating new TabsLink class instances of each link.  No need to update anything here, just study what is going on.  Notice that we are creating another new object using the TabsLink class.
    this.links = Array.from(this.links).map( link => {
      return new TabsLink(link, this);
    });
    this.activeLink = TabsLink;// Set the active link to the first item in the array
    this.init();// Nothing to update here, just notice we are invoking the init() method
  }

  init() { 
    this.activeLink.select();// invoke the method select() on activeLink
  }

  updateActive(newActive) {
    this.activeLink.deselect();// invoke the method deselect() on activeLink
    this.activeLink = newActive;// assign this.activeLink to the new active link (newActive)
  }

  getTab(data) {
    return this.element.dataset.data;// return a reference to the element's data attribute
  }
}

class TabsLink {
  // notice that we passed in the element reference as well as a reference to the parent class.
  constructor(element, parent) {
    this.element = element;
    
    this.tabs = parent;// assign this.tabs to parent

    this.tabsItem = parent.getTab(tabs-link.dataset.tab);// Using the method from the parent class above, pass in a reference to the custom data attribute.   
    this.tabsItem = new TabsItem(this.tabsItem);// Create a new TabsItem object that passes in a tabsItem value that you just created above
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();// invoke the select() method on this   
    });
  };

  select() {
    this.element.classList.add("tabs-link-selected");// Add a class named "tabs-link-selected" to the element
    this.tabsItem.select();// Notice that we are using the select method on tabsItem   
  }

  deselect() {
    this.element.classList.remove("tabs-link-selected"); // Remove a class named "tabs-link-selected" from the element
    this.tabsItem.deselect();// Notice that we are using the deselect method on tabsItem    
  }
}

class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add("tabs-item-selected");// Add a class named "tabs-item-selected" to the element 
    
  }

  deselect() {
    this.element.classList.remove("tabs-item-selected");// Remove a class named "tabs-item-selected" from the element 
    // Congrats, you finished all the instruction, check out your tab navigator!
  }
}


// START HERE: create a reference to the ".tabs" classes
let tabs = document.querySelectorAll(".tabs");
// map through each tabs element and create a new Tabs object.  Be sure to pass in a reference to the tab when creating the Tabs object.
tabs = Array.from(tabs).map( element => new Tabs(element));

//