class TabLink {
  constructor(element) {
    this.element = element;

    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    // console.log(this.data); // '1'

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(
      `.tabs-item[data-tab="${this.data}"]`
    );
    // console.log(this.itemElement); // <div class="tabs-item" data-tab="1">

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement); // **Blocker: this.itemElement needed to be passed in instead of this.tabItem**

    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener("click", event => {
      this.select(event);
    });
  }

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll(".tabs-link");
    window.addEventListener("load", function() {
      TweenMax.staggerFrom(
        links,
        1,
        { x: 300, opacity: 0 },
        // { x: 0, opacity: 1 },
        0.2
      );
      TweenMax.from(".header", 1, { scale: 0.3, opacity: 0, delay: 3.7 });
    });

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(link =>
      link.classList.remove("tabs-link-selected")
    ); // **Makes all the tabs red**

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add("tabs-link-selected"); // **Makes our selected tab white**

    // Call the select method on the item associated with this link
    this.tabItem.select(); // **Blocker: Did not understand what I had to do**
  }
}

class TabItem {
  constructor(tabItem) {
    this.tabItem = tabItem;
    console.log(this.tabItem);
  }

  select() {
    // Select all items elements from the DOM
    const items = document.querySelectorAll(".tabs-item");
    console.log(items);
    TweenMax.fromTo(items, 1, { opacity: 0 }, { opacity: 1 });
    // Remove the class "tabs-item-selected" from each element
    Array.from(items).forEach(item =>
      item.classList.remove("tabs-item-selected")
    );
    // Add a class named "tabs-item-selected" to this element
    this.tabItem.classList.add("tabs-item-selected");
    console.log(this.tabItem);
  }
}

// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll(".tabs-link");

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item.
links = Array.from(links).map(link => new TabLink(link));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
links[0].select(); // **Blocker: Did not understand what I had to do**
