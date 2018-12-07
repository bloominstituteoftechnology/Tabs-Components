class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;

    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    this.itemElement = document.querySelector(
      `.tabs-item[data-tab="${this.data}"]`
    );

    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.itemElement = new TabItem(this.itemElement);

    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener("click", () => this.select());
  }

  select() {
    // Get all of the elements with the tabs-link class
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    this.deselect();
    TweenMax.to(this.element, 1, { className: "+=tabs-link-selected" }); // Add a class named "tabs-link-selected" to this link

    // Call the select method on the item associated with this link
    this.itemElement.select();
  }

  deselect() {
    const links = document.querySelectorAll(".tabs-link");
    links.forEach(function(link) {
      if (link.classList.contains("tabs-link-selected")) {
        TweenMax.to(link, 1, { className: "-=tabs-link-selected" });
      } else {
      }
    });
  }
}

const links = document
  .querySelectorAll(".tabs-link")
  .forEach(link => new TabLink(link));
