class Tabs {
  constructor(element) {
    this.element = element;

    /* START HERE: 

    - Select all classes named ".tabs-link" and assign that value to the links variable

    - With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

    - In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

    */

    // Get and instantiate all tab links in the tab area
    const links = Array.from(this.element.querySelectorAll(".tabs-link"))
      .map(link => new TabLink(link));

    // Get currently selected tab
    let selectedTab;
    for (let i = 0; i < links.length; i++) {
      if (links[i].element.classList.contains("tabs-link-selected")) {
        this.selectedTab = links[i];
        break;
      }
    }

    // Add a click event listener on the tab link instances, calling the select method on click
    links.forEach(link => {
      link.element.addEventListener("click", e => this.select(e, link));
    });
  }

  select(e, link) {
    this.deselect(e);
    
    this.selectedTab = link;
    link.select(e);
  }

  deselect(e) {
    this.selectedTab.deselect(e);
  }
}

class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;
    
    // Create a TabItem pertaining to this link's custom data attribute
    this.tabItem = new TabItem(document.querySelector(`.tabs-item[data-tab="${this.data}"]`));
  }

  select(e) {
    this.element.classList.add("tabs-link-selected");
    this.tabItem.select(e);
  }

  deselect(e) {
    this.element.classList.remove("tabs-link-selected");
    this.tabItem.deselect(e)
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select(e) {
    this.element.classList.add("tabs-item-selected");
  }

  deselect(e) {
    this.element.classList.remove("tabs-item-selected");
  }
}

// Select tabs container  element (for Tabs component)
const tabsArea = new Tabs(document.querySelector(".tabs"));