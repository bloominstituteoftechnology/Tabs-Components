
class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
     this.element = element;
  }
  select() {
    this.deselect()
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add("tabs-item-selected");
  }
  deselect(){
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll(".tabs-item");
    // Remove the class "tabs-item-selected" from each element
    Array.from(items).forEach(item => item.classList.remove("tabs-item-selected"));
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/




