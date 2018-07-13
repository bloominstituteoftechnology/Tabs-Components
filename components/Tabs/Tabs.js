class Tabs {
  constructor(element) {
    this.element = element;
    this.links = document.querySelectorAll('.tabs-link');
    
    this.links = Array.from(this.links).map((link)=>{
      return new TabsLink(link, this);
    })
    
    this.activeLink = this.links[0];
    this.init();
  }

  init() { 
    this.activeLink.select();
  }

  updateActive(newActive) {
    console.log(newActive);
    
    this.activeLink.deselect();
    this.activeLink = newActive;
  }

  getTab(data) {
    return this.element = document.querySelector(`.tabs-link[data-tab="${data}"]`);
  }

}

class TabsLink {

  constructor(element, parent) {
    this.element = element;
    this.tabs = parent;
    
    this.tabsData = this.element.dataset.tab;
    this.tabsItem = parent.getTab(this.tabsData);
    this.tabsItem = new TabsItem(this.tabsItem);

    this.element.addEventListener('click', (e) => {
      this.tabs.updateActive(this);
      // invoke the select() method on this
      this.select();
    });
  };

  select() {
    // Add a class named "tabs-link-selected" to the element

    this.element.classList.add('tabs-link-selected');
    // Notice that we are using the select method on tabsItem
    this.tabsItem.select();
  }

  deselect() {
    // Remove a class named "tabs-link-selected" from the element
    this.element.classList.remove('tabs-link-selected');
    // Notice that we are using the deselect method on tabsItem
    this.tabsItem.deselect();
  }
}

class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Add a class named "tabs-item-selected" to the element 
    this.element.classList.add('tabs-item-selected');
  }

  deselect() {
    // Remove a class named "tabs-item-selected" from the element 
    this.element.classList.remove('tabs-item-selected');
    // Congrats, you finished all the instruction, check out your tab navigator!
  }
}


// START HERE: create a reference to the ".tabs" classes
let tabs = document.querySelectorAll('.tabs');

// map through each tabs element and create a new Tabs object.  Be sure to pass in a reference to the tab when creating the Tabs object.
tabs = Array.from(tabs).map(((tab)=>{
  return new Tabs(tab);
}));

