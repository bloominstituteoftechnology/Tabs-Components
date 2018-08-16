class Tab {
  constructor(element) {
    this.element = element;
    // create a reference to the ".tabs-link" class nested in your tab object
    this.links=document.querySelectorAll('.tabs-link');
    // This step will map over the array creating new TabsLink class instances of each link.  No need to update anything here, just study what is going on.  Notice that we are creating another new object using the TabsLink class.
    this.links = Array.from(this.links).map( link => {
      return new TabsLink(link, this);
    });
    // Set the active link to the first item in the array
    this.activeLink=this.links[0];
    // Nothing to update here, just notice we are invoking the init() method
    this.init();
  }

  init() { 
    // invoke the method select() on activeLink
    this.activeLink.select();
  }

  updateActive(newActive) {
    // invoke the method deselect() on activeLink
    this.activeLink.deselect();
    // assign this.activeLink to the new active link (newActive)
    this.activeLink=newActive;
  }

  getTab(data) {
    // return a reference to the element's data attribute
    return this.element.querySelector(`.tabs-item[data-tab="${data}"]`);
  }

}

class TabLink {
  // notice that we passed in the link reference as well as a reference to the parent class.
  constructor(link, parent) {
    this.link=link
    // assign this.tabs to parent
    this.tabs=parent;
    // Using the method from the parent class above, pass in a reference to the custom data attribute.  
    this.tabsItem = parent.getTab(this.link.dataset.tab);
    // Create a new TabsItem object that passes in a tabsItem value that you just created above
    this.tabsItem=new TabsItem(this.tabsItem);

    this.link.addEventListener('click', () => {
      this.tabs.updateActive(this);
      // invoke the select() method on this
      this.select(this);
    });
  };

  select() {
    // Add a class named "tabs-link-selected" to the link
    this.link.classList.add("tabs-link-selected");
    // Notice that we are using the select method on tabsItem
    this.tabsItem.select();
  }

  
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Add a class named "tabs-item-selected" to the element 
    TweenLite.to(this.element, .4, {css:{className:'+=tabs-item-selected'}, autoAlpha:1})
    
  }


}


// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll('.tabs-link');
// map through each tabs element and create a new Tabs object.  Be sure to pass in a reference to the tab when creating the Tabs object.
links = Array.from(links).map((link)=>new Tabs(link));

links[0].select();