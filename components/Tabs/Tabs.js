class Tabs {
  constructor(element) {
    this.element = element;
    this.links = document.querySelectorAll('.tabs-link');
    
    this.links = Array.from(this.links).map((link)=>{
      return new TabsLink(link, this);
    })
    
    this.activeLink = this.links[0];
    this.init();
  }

  init() { 
    this.activeLink.select();
  }

  updateActive(newActive) {
    console.log(newActive);
    
    this.activeLink.deselect();
    this.activeLink = newActive;
  }

  getTab(data) {
    return this.element = document.querySelector(`.tabs-link[data-tab="${data}"]`);
  }

}

class TabsLink {

  constructor(element, parent) {
    this.element = element;
    this.tabs = parent;
    
    this.tabsData = this.element.dataset.tab;
    this.tabsItem = parent.getTab(this.tabsData);
    this.tabsItem = new TabsItem(this.tabsItem);

    this.element.addEventListener('click', (e) => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    this.element.classList.add('tabs-link-selected');
    this.tabsItem.select();
  }

  deselect() {
    this.element.classList.remove('tabs-link-selected');
    this.tabsItem.deselect();
  }
}

class TabsItem {
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

tabs = Array.from(tabs).map(((tab)=>{
  return new Tabs(tab);
}));

