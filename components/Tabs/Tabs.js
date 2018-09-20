class TabLink {
  constructor(link) {
    this.element = link;

    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`
    );

    // Using the Item element, create a new instance of the TabItem class
    this.itemElement = new TabItem(this.itemElement);

    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener("click", () => {
      this.select();
    });
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');
   links.forEach(link => link.classList.remove('tabs-link-selected'));
    this.element.classList.add('tabs-link-selected');
    this.itemElement.select();
  }
}

class TabItem {
  constructor(itemElement) {
    this.itemElement = itemElement;
  }

  select() {
    const content = document.querySelectorAll('.tabs-item');
    Array.from(content).forEach((item) => item.classList.remove('tabs-item-selected'));
    this.itemElement.classList.add('tabs-item-selected');
  }
}

// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll(".tabs-link");

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item.
links = Array.from(links).map(link => new TabLink(link));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
links[0].select();
