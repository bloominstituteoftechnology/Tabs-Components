class Tabs {
  constructor(element) {
    this.element = element;

    this.links = this.element.querySelectorAll(".tabs-link");

    this.links = Array.from(this.links).map(link => {return new TabsLink(link, this);});

    this.activeLink = this.links[0];

    this.init();
  }

  init() { 
    this.activeLink.select();
  }

  updateActive(newActive) {
    this.activeLink.deselect();
    this.activeLink = newActive;
  }

  getTab(data) {
    return this.element.querySelector(`.tabs-item[data-tab="${data}"]`);
  }
}

class TabsLink {
  constructor(link, parent) {
    this.link = link;
    
    this.tabs = parent;
    
    this.tabsItem = parent.getTab(this.link.dataset.tab);
    
    this.tabsItem = new TabsItem(this.tabsItem) ;

    this.link.addEventListener('click', () => {this.tabs.updateActive(this);

    this.select();
    });
  }

  select() {
    this.link = this.link.classList.addClass('tabs-link-selected') ;
   
    this.tabsItem.select();
  }
  deselect() {
    this.link = this.link.classList.toggle('tabs-link-selected'); 
   
    this.tabsItem.deselect();
  }
}

class TabsItem {
  constructor(element) {
    this.element = element;
  }
  select() {
    this.element = this.element.classList.addClass("tabs-item-selected");
  }
  deselect() {
    this.element = this.element.classList.toggle("tabs-item-selected");
  }
}

let tabs = document.querySelectorAll(".tabs");
tabs = Array.from(tabs).map(tab => new Tabs(tab));
