class TabLink {
  constructor(element) {
    // this element = current tab link
    this.element = element;

    // Get the custom data attribute on the Link
    // this.data = number (current tab link data-tab [i] ex. 1, 2, 3)
    this.data = this.element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    // this.itemElement selects the content associated with the current tabs this.data (ex. tab 1 = item 1, tab 2 = item 2,etc)
    this.itemElement = document.querySelector(
      `.tabs-item[data-tab="${this.data}"`
    );

    // Using the Item element, create a new instance of the TabItem class
    // takes the content and adds a method to the content in order to open the content associated with the tab.
    this.itemElement = new TabItem(this.itemElement);

    // Add a click event listener on this instance, calling the select method on click
    // Adds one event listener to each tab that triggers select method in order to make tab look selected. Select method will then trigger second select method under the text content to make content associated with tab visible.
    this.element.addEventListener('click', () => {
      this.select();
    });
  }
  // Select method invoked when tab is clicked
  select() {
    // Get all of the elements with the tabs-link class
    // Makes Nodelist of all clickable tab links
    const links = document.querySelectorAll('.tabs-link');
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Turn tab links node list into array. Iterate over array and for each tab link remove the class tabs-link-selected. This makes it so no tabs look like they are currently selected.
    Array.from(links).forEach((link) =>
      link.classList.remove('tabs-link-selected')
    );

    // Add a class named "tabs-link-selected" to this link
    // this.element from the TabLink constructor is equal to the current tab. This adds a class to the current tab that was clicked on to make it look selected.
    this.element.classList.add('tabs-link-selected');

    // Call the select method on the item associated with this link
    // Calls select method under the TabItem constructor. This is connected directly with the the current tabs content. ex. invokes select() on content 1 when tab 1 is clicked
    this.itemElement.select();
  }
}

class TabItem {
  constructor(element) {
    // this.element = content for the current tab. This is passed through above through itemElement
    this.element = element;
  }
  // select is invoked in the tab link select method. It is invoked after making the target tab look like it is viewed. This method will bring the content associated with the current tab into view while removing any other content
  select() {
    // Select all items elements from the DOM
    // items = nodelist for all tabs content
    const items = document.querySelectorAll('.tabs-item');
    // Remove the class "tabs-item-selected" from each element
    // Creates array out of the item content nodelist. For each item content it removes the class tabs-item-selected. This removes any content currently on page.
    Array.from(items).forEach((item) =>
      item.classList.remove('tabs-item-selected')
    );
    // Add a class named "tabs-item-selected" to this element
    // this.element = content for current tab. This adds a class to the content for the tab that was selected to make that specific content visible.
    this.element.classList.add('tabs-item-selected');
  }
}

// START HERE: create a reference to the ".tabs" classes
// create nodelist for all tabs-link
let links = document.querySelectorAll('.tabs-link');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item.
// Makes the links nodelist equal to an array. And maps over each item to give attributes and methods of the TabLink constructor.
links = Array.from(links).map((link) => new TabLink(link));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
// When visiting page this makes the content for the first tab visible.
links[0].select();
