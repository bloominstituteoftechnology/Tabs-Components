class Tabs {
  constructor(tabsElement) {
    // tabs div
    this.element = tabsElement;
    // console.log(tabsElement);
    this.links = this.element.querySelectorAll('.tabs-link');
    this.links = Array.from(this.links).map( link => {
      return new TabsLink(link, this);
    });
    // console.log(this.links);
    this.activeLink = this.links[0];
    // console.log(this.activeLink);
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
    return this.element.querySelector(`.tabs-item[data-tab='${data}']`);
  }
}

class TabsLink {
  constructor(link, parent) {
    this.link = link;
    // tabs instance
    this.tabs = parent;
    // linking the data attr to tab content 
    this.tabsItem = parent.getTab(this.link.dataset.tab);
    this.tabsItem = new TabsItem(this.tabsItem);

    this.link.addEventListener('click', (e) => {
      // match the current link and parent's link
      // let currentTabsLink = this.tabs.links.filter((linkOject) => {
      //   return e.target.dataset.tab === linkOject.link.dataset.tab;
      // })[0];
      // console.log(currentTabsLink);
      let currentTabsLink = this;
      // pass the current link to parent
      this.tabs.updateActive(currentTabsLink);
      // invoke the select() method on this
      currentTabsLink.select();
    });
  };

  select() {
    this.link.classList.add('tabs-link-selected');
    this.tabsItem.select();
  }

  deselect() {
    this.link.classList.remove('tabs-link-selected');
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
tabs = Array.from(tabs).map(tab => new Tabs(tab));