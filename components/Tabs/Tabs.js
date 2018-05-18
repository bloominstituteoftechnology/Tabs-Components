
class TabsItem {
  constructor(element) {

  }

  select() {
  }

  deselect() {
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element;
    this.tabs;

    this.tabsItem = parent.getTab();
    this.tabsItem;

    this.element.click( () => {
      this.tabs.updateActive(this);
    });
  };

  select() {

  }

  deselect() {

  }
}

class Tabs {
  constructor(element) {
    this.element = element;

    this.links;

    // This step will map over the array creating new TabsLink class isntances of each link.
    this.links = Array.from(this.links).map( link => {
      return new TabsLink(link, this);
    });

    this.activeLink;
    this.init();
  }

  init() {

  }

  updateActive(newActive) {

  }

  getTab(data) {
  }

}

let tabs = document.querySelectorAll();
tabs = Array.from(tabs).map();

