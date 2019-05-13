
class TabLink {
  constructor(link) {
    this.link = link;
    this.data = document.querySelector(`.tabs-link[data-tab='${this.link.dataset.tab}']`);
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.link.dataset.tab}']`);
    this.tabItem = new TabItem(this.itemElement);
    this.link.addEventListener('click', () => this.select());
  }
  
  select() {
    const links = document.querySelectorAll('.tabs-link');
    Array.from(links).forEach(link => {
      link.classList.remove("tabs-link-selected");
    });
    this.link.classList.add("tabs-link-selected")
    this.tabItem.select();
  }
}

class TabItem {
  constructor(tabItem) {
    this.tabItem = tabItem;
  }

  select() {
    const items = document.querySelectorAll('.tabs-item')
    Array.from(items).forEach(item => {
      item.classList.remove("tabs-item-selected");
    });
    this.tabItem.classList.add("tabs-item-selected")
  }
}

let links = document.querySelectorAll('.tabs-link');
links.forEach(link => {
  return new TabLink(link);
});