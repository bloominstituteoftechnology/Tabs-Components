class Tabs {
  constructor(links) {
    this.links = links;
    this.linkSelected = document.querySelector('.tabs-link-selected');
    this.itemSelected = document.querySelector('.tabs-item-selected');
    this.links.forEach(link => new TabLink(link));
  }
}

class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener('click', () => {
      this.select();
    })
  };

  select() {
    if(this.element == links.linkSelected) {
      this.deselect();
      this.tabItem.deselect();
    } else {
      links.linkSelected.classList.remove('tabs-link-selected');
      this.element.classList.add('tabs-link-selected');
      links.linkSelected = this.element;
      this.tabItem.select();
    }
  }

  deselect() {
    this.element.classList.toggle('tabs-link-selected')
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    links.itemSelected.classList.remove('tabs-item-selected');
    this.element.classList.add('tabs-item-selected');
    links.itemSelected = this.element;
  }

  deselect() {
    this.element.classList.toggle('tabs-item-selected');
  }
}

links = new Tabs(document.querySelectorAll('.tabs-links .tabs-link'));