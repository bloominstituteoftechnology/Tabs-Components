
class TabLink {
  constructor(element) {
    this.element = element;

    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);

  };

  select() {

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');

    // Call the select method on the item associated with this link

    this.tabItem.select();

  }

  deselect() {

    // Remove a class named "tabs-link-selected" from this link
    this.element.classList.remove('tabs-link-selected');

    // Call the deselect method on the item associated with this link
    this.tabItem.deselect();

  }

}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {

    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');

  }

  deselect() {

    // Remove a class named "tabs-item-selected" from this element
    this.element.classList.remove('tabs-item-selected');

  }
}

class Tab {

  constructor(element) {

    this.element = element;

    let links = element.querySelectorAll('.tabs-link');

    links = Array.from(links).map(link => {

      let tabLink = new TabLink(link);

      link.addEventListener('click', () => this.select(tabLink));

      return tabLink;

    });

    this.selectedLink = links[0];

    this.select(links[0]);

  }

  select(link) {

    this.selectedLink.deselect();
    this.selectedLink = link;
    this.selectedLink.select();

  }

}

let tab = new Tab(document.querySelector('.tabs'));
