
class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.content[data-tab="${this.data}"]`);
    this.itemElement = new TabItem(this.itemElement);
    this.element.addEventListener('click', () => {this.select()});
  };

  select() {
    const links = document.querySelectorAll('.tabs-link');
    links.forEach(link => {
      link.classList.remove('tabs-link-selected');

    });
    this.element.classList.toggle('tabs-link-selected');
    // Call the select method on the item associated with this link
    
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;

    // Remove the class "tabs-item-selected" from each element
    
    // Add a class named "tabs-item-selected" to this element
    //this.element;
  }
}

const links = document.querySelectorAll('.tabs-link').forEach(link => new TabLink(link));