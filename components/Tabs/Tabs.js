class Tabs {
  constructor(tabsElement) {
    this.element = tabsElement;
    this.tabLinks = this.element.querySelectorAll('.tabs-link');
    this.tabLinks = Array.from(this.tabLinks).map(link => {
      return new TabsLink(link, this);
    });
    this.clicked = this.tabLinks[0];
    this.starting();
  }

  starting() {
    this.clicked.select();
  }

  tabbed(newActive) {
    this.clicked.unselect();
    this.clicked = newActive;
  }

  getTab(data) {
    return this.element.querySelector(`.tabs-item[data-tab='${data}']`);
  }
}

class TabsLink {
  constructor(link, data) {
    this.link = link;
    this.tabs = data;
    this.tabsItem = data.getTab(this.link.dataset.tab);
    this.tabsItem = new TabsItem(this.tabsItem);

    this.link.addEventListener('click', (e) => {
      let currentTabsLink = this.tabs.tabLinks.filter((linkOject) => {
        return e.target.dataset.tab === linkOject.link.dataset.tab;
      })[0];
      this.tabs.tabbed(currentTabsLink);
      currentTabsLink.select();
    });
  };

  select() {
    this.link.classList.add('tabs-link-selected');
    this.tabsItem.select();
  }

  unselect() {
    this.link.classList.remove('tabs-link-selected');
    this.tabsItem.unselect();
  }
}

class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add('tabs-item-selected');
  }

  unselect() {
    this.element.classList.remove('tabs-item-selected');
  }
}

let tabs = document.querySelectorAll('.tabs');
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));