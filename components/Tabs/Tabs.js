
class Tab {
  constructor() {
    // Create an array of TabLinks
    let links = Array.from(document.querySelectorAll('.tabs .tabs-links .tabs-link'));
    links = links.map(link => new TabLink(link));

    // Find the TabLink that is selected and save it in this.selectedTab 
    this.selectedTab = links.filter(link => {
      return Array.from(link.element.classList).includes('tabs-link-selected');
    })[0];

    // Add the click event listener on each TabLink, and reset selectedTab to the clicked TabLink
    links = links.map(link => {
      link.element.addEventListener('click', () => {
        this.deselect();
        link.select();
        this.selectedTab = link;
      });
    });
  }

  deselect() {
    this.selectedTab.element.classList.remove('tabs-link-selected');
    this.selectedTab.tabItem.element.classList.remove('tabs-item-selected');
  }
}

class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-items .tabs-item[data-tab='${this.data}']`);
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
  };

  select() {
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    
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
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
  }

}

/* START HERE */

const tab = new Tab();