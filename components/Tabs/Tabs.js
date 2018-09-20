class TabLink {
  constructor(element) {
    this.element = element;

    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    this.tabItem = document.querySelector(`.tabs-item[data-tab='${this.data}']`);

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.tabItem);

    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener("click", () => {
      this.select(event);
    });
  }

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll(".tab-link");

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(function(tabsLinks) {
      tabsLinks.classList.remove("tabs-link-selected");
    });

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.toggle("tabs-link-selected");

    // Call the select method on the item associated with this link
    this.tabItem.select();
  }

  deselect() {
    
        Array.from(links).forEach(function(tabsLinks) {
          tabsLinks.classList.remove("tabs-link-selected");
        });
  }

}

class Tabs {
  constructor(element) {
    this.element = element;

    this.tabLink = document.querySelector('.tabs');

    this.tabLink = new TabLink(this.tabLink);
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all items elements from the DOM
    const items = document.querySelectorAll(".tabs-item");

    // Remove the class "tabs-item-selected" from each element
    Array.from(items).forEach(function(tabItems) {
      tabItems.classList.remove("tabs-item-selected");
    });

    // Add a class named "tabs-item-selected" to this element
    this.element.classList.toggle("tabs-item-selected");

    this.tabsLink.deselect();
  }

}

// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll(".tabs-link");

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item.
links = Array.from(links).map(element => {
  return new TabLink(element);
});

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
links[0].select();