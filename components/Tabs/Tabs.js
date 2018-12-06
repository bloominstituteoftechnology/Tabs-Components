
class TabLink {
  constructor(tabsLink) {
    // Assign this.element to the passed in DOM element
    this.tabsLink = tabsLink;
    
    // Get the custom data attribute on the Link
    this.tabsLinkData = this.tabsLink.dataset.tab;
        
    // Using the custom data attribute get the associated Item element
    this.tabsContent = document.querySelector(`.tabs-item[data-tab="${this.tabsLinkData}"]`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabsContent = new TabItem(this.tabsContent);
    
    // Add a click event listener on this instance, calling the select method on click
    this.tabsLink.addEventListener('click', () => {this.select()});
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(link => link.classList.remove('tabs-link-selected'));

    // Add a class named "tabs-link-selected" to this link
    this.tabsLink.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.tabsContent.select(this.tabsContent);
  }
}

class TabItem {
  constructor(tabsContent) {
    // Assign this.element to the passed in element
    this.tabsContent = tabsContent;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    Array.from(items).forEach(item => item.classList.remove('tabs-item-selected'));
    
    // Add a class named "tabs-item-selected" to this element
    this.tabsContent.classList.add('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const links = document.querySelectorAll('.tabs-link');
links.forEach( tabsLink => new TabLink(tabsLink));