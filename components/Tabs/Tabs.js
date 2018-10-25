class Tab {
  constructor(element) {
    this.element = element;
    this.link = this.element.querySelectorAll('.tabs-link');
    this.link = Array.from(this.link).map(link => new TabLink(link, this));
    this.selected = this.link[0];
    this.start();
  }
  start() {
    this.selected.select()
  }
  update(data) {
    this.selected.deselect();
    this.selected = data;
  }
}

class TabLink {
  constructor(link, parent) {
    this.link = link;
    this.tab = parent;
    this.data = this.link.dataset.tab;
    this.tabItem = document.querySelector(`.tabs-item[data-tab="${this.data}"]`)
    this.tabItem = new TabItem(this.tabItem);
    this.link.addEventListener('click', () => {
      this.tab.update(this);
      this.select();
    });
  }
  select() {
    this.link.classList.add('tabs-link-selected');
    this.tabItem.select();
  }
  deselect() {
    this.link.classList.remove('tabs-link-selected');
    this.tabItem.deselect();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }
  select() {
    this.element.classList.add('tabs-item-selected');
  }
  deselect() {
    this.element.classList.remove('tabs-item-selected');
  }
}

let tabs = document.querySelectorAll('.tabs');
tabs = Array.from(tabs).map(tab => new Tab(tab));