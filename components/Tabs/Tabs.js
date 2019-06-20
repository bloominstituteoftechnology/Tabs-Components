class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.content[data-tab="${this.data}"]`);
    this.data = this.element.dataset.tab; 
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    console.log(this.itemElement);
    this.itemElement = new TabItem(this.itemElement);
    this.element.addEventListener('click', () => {this.select()});
    this.element.addEventListener('click', () => {this.select(element)});
  };

   select() {
    const links = document.querySelectorAll('.tabs-link');
    links.forEach(link => {
      link.classList.remove('tabs-link-selected');

    });
    this.element.classList.toggle('tabs-link-selected');
    // Call the select method on the item associated with this link

    this.element.classList.add('tabs-link-selected'); 
    this.itemElement.select();   
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
    this.tabItem = element;

  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;

    // Remove the class "tabs-item-selected" from each element

    // Add a class named "tabs-item-selected" to this element
    //this.element;
    const items = document.querySelectorAll('.tabs-item');;
    items.forEach(item => {
      item.classList.remove('tabs-item-selected');
    });
    this.tabItem.classList.add('tabs-item-selected');
  }
}

const links = document.querySelectorAll('.tabs-link').forEach(link => new TabLink(link));