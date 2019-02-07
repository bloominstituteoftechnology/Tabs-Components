
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;  
    
    // Get the custom data attribute on the Link
    this.data = document.querySelector(
      `.tabs-item[data-tab='${tabsLink.dataset.tab}']`
    ); 
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = tabsLink;
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.tabItem);
    
    // Add a click event listener on this instance, calling the select method on click
    tabsLink.addEventListener("click", () => this.select());
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll(".tabsLink");

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(items.classList.remove("tabsLinkSelected"));

    // Add a class named "tabs-link-selected" to this link
    this.element = items.classList.add("tabsItemSelected");
    
    // Call the select method on the item associated with this link
    tabsLinkSelected.addEventListener("click", () => this.select());
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll(".tabsItem");

    // Remove the class "tabs-item-selected" from each element
    items.classList.remove("tabsItemSelected");
    // Add a class named "tabs-item-selected" to this element
    this.element = items.classList.add("tabsItemSelected");
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll(".tabsLink");

links.forEach(TabsLink => new TabItem(tabsLink));