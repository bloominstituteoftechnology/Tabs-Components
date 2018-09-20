class TabLink {
  constructor(element) {
    this.element = element;

    this.data = this.element.dataset.tab;

    this.itemElement = document.querySelector(
      `.tabs-item[data-tab='${this.data}']`
    );
        
    this.tabItem = new TabItem (this.itemElement);
 
    this.element.addEventListener('click', () => this.select());
  }

  select() {

    links.forEach(x => {
      
      if (x.element !== this.element && x.element.classList.contains('tabs-link-selected')){
        x.element.classList.toggle('tabs-link-selected');
        x.tabItem.element.classList.toggle('tabs-item-selected')
      }
      
    });

    this.element.classList.toggle('tabs-link-selected');
    this.tabItem.element.classList.toggle('tabs-item-selected')
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }
}


let links = document.querySelectorAll('.tabs-link');

links = Array.from(links).map(x => new TabLink(x));

links[0].select()