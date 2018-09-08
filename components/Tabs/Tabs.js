
class Tabs {
  constructor(element) {
    this.element = element;
    let links = document.querySelectorAll('.tabs-link');
    this.links = Array.from(links).map((link) => {return new TabLink(link)});
    this.selectedLink = this.links[0].element;
    this.selectedLink.classList.add('tabs-link-selected');
    this.selectedItem = this.links[0].tabItem.element;
    this.selectedItem.classList.add('tabs-item-selected');
  }
}

class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);    
    this.tabItem = new TabItem(this.itemElement);    
    this.element.addEventListener('click', () => this.select());
  };

  select() {
    this.deselect(tab.selectedLink);
    this.tabItem.deselect(tab.selectedItem);
    tab.selectedLink = this.element;
    tab.selectedItem = this.tabItem.element;
    this.element.classList.add('tabs-link-selected');
    this.tabItem.select();
  }

  deselect(link) {
    link.classList.remove('tabs-link-selected');
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add('tabs-item-selected');
  }

  deselect(item) {
    item.classList.remove('tabs-item-selected');
  }
}

const tab = new Tabs(document.querySelector('.tabs-links'));
