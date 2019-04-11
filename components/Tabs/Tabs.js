
class TabLink {
  constructor(element) {
    this.link = element;
    this.data = this.link.dataset.tab;
    this.itemContent = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    this.itemContent = new TabItem(this.itemContent);
    this.link.addEventListener('click', () => this.select())
  };

  select() {
    const links = document.querySelectorAll('.tabs-link');
    links.forEach(currentValue => {currentValue.classList.toggle('tabs-link-selected', false)});
    this.link.classList.toggle('tabs-link-selected');
    this.itemContent.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll('.tabs-item');
    items.forEach(currentValue => {currentValue.classList.toggle('tabs-item-selected', false)});
    this.element.classList.toggle('tabs-item-selected');
  }
}

links = document.querySelectorAll('.tabs-link').forEach( link => new TabLink(link));