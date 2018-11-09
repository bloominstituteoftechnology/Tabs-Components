
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    // console.log('element: ')
    // console.log(this.element);
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    // console.log(this.data);
    
    // Using the custom data attribute to get the associated Item element
    // Grab elements from .tabs-items class to later connect them with link
    this.itemElement = document.querySelector(`.tabs-items .tabs-item[data-tab='${this.data}']`);
    // console.log(this.itemElement);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    // accessing a method from inside a method needs binding
    this.element.addEventListener('click', this.select.bind(this));
    // console.log('element: ')
    // console.log(this.element );
  };

  select() {
    // Get all of the elements with the tabs-link class
    // Have to access the HTML page
    const links = document.querySelectorAll('.tabs-link');
    // console.log(this.element);
    // console.log(links); 

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    
    // links.forEach(link => {
    //   link.classList.remove('tabs-link-selected');
    // });

    Array.from(links).forEach(link => link.classList.remove('tabs-link-selected'));
    // Array.from(links).forEach(link => console.log(link));
    // console.log(links);

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    // console.log(this.tabItem);
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');
    // console.log(items);

    // Remove the class "tabs-item-selected" from each element
    items.forEach(item => item.classList.remove('tabs-item-selected'));

    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll('.tabs-link').forEach(link => {
  // console.log(link);
  return new TabLink(link);
});