class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(
      `.tabs-item[data-tab="${this.data}"]`
    );
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    // Add a click event listener on this instance, calling the select method on click
    element.addEventListener("click", () => this.select());
  }

  select() {
    // Get all of the elements with the tabs-link class
    const links = [...document.querySelectorAll(".tabs-link")]; // const links = ...
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    links.forEach(element => element.classList.remove("tabs-link-selected"));
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add("tabs-link-selected");
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
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll(".tabs-item");
    // Remove the class "tabs-item-selected" from each element
    items.forEach(element => element.classList.remove("tabs-item-selected"));
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add("tabs-item-selected");
  }
}

/* START HERE:
- Select all classes named ".tabs-link" and assign that value to the links variable
- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList
- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter
*/
const links = document // const links = ...
  .querySelectorAll(".tabs-link")
  .forEach(element => new TabLink(element));

// See two comments above "const links = ..." (lines 19 adn 49). The commented out instructions for this assignment inlude a suggestion to use the variable name "links" in two places (originally lines 22 and 62). Line 62 didn't have const/let/var in front of it, but considering that it is seen first, it should have. I added const to it (const links = ...), and left the other const in place (also const links = ...). I expected an error, and planned to change the variable name of the second one (line 19 in my code). However, to my surprise, no error is thrown despite const links appearint twice, the first of which in the global scope. I left the code as is because I want to understand why there is no error.
