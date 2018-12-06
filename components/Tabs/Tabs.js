
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tab-item[data-tab='${this.data}']`);
    
    // Using the Item element, create a ->new<- instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, 
    //calling the select method  [ex select()] on click.

    this.element.addEventlistener('click', () => {
      this.select() 
    });
  };

  select() {
    // Get all of the elements with the tabs-link class
    
    const links = document.querySelectorAll('tabs-links');

    // Using a loop or the forEach method remove the 'tabs-link-selected' 
    //class from all of the links
    
    Array.from(links).forEach();

    // Add a class named "tabs-link-selected" to this link
    
    this.element.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    
    this.tabItem.select.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
  }

// (methods) //

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;

    // Remove the class "tabs-item-selected" from each element
    
    // Add a class named "tabs-item-selected" to this element
    //this.element;
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable


- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll('.tab-links');
links.forEach( link => new TabLink(link));


// links = document.querySelectorAll();