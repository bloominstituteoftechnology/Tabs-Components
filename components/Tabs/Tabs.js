

//== Define Tabs Component =====================================================

//-- Open Private Namespace ----------------------
const Tabs = (() => {

  //-- Main Tabs Component -------------------------
  let resultClass = class {
    constructor (element) {
      this.element = element;
      this.tabLinks = [];
      this.tabItems = [];
      this.selectedTab = undefined;
      //
      Array.from(document.querySelectorAll('.tabs-link'))
      .forEach(linkElement => {
        let tabIndex = linkElement.dataset.tab;
        let itemElement = document.querySelector(`.tabs-item[data-tab="${tabIndex}"]`);
        let newTabLink = new TabLink(linkElement, this);
        let newTabItem = new TabItem(itemElement, this);
        this.tabLinks.push(newTabLink);
        this.tabItems.push(newTabItem);
      })
      //
      this.select(this.tabLinks[0]);
    }
    select(selectedTabLink) {
      this.selectedTab = selectedTabLink;
      this.tabLinks.forEach((indexedTabLink, index) => {
        let indexedTabItem = this.tabItems[index];
        if(indexedTabLink === selectedTabLink){
          indexedTabLink.select();
          indexedTabItem.select();
        } else{
          indexedTabLink.deselect();
          indexedTabItem.deselect();
        }
      });
    }
  }

  // -- TabLink Subcomponent -----------------------
  class TabLink {
    constructor(element, tabsParent) {
      this.element = element;
      this.element.addEventListener('click', () => {
        tabsParent.select(this); // I don't like this circular reference
      });
    };
    select() {
      this.element.classList.add('tabs-list-selected');
    }
    deselect() {
      this.element.classList.remove('tabs-link-selected');
    }
  }

  //-- TabItem Subcomponent ------------------------
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

  //-- Return Class and Close Namespace ------------
  return resultClass;
})();


//== Instantiate the Tabs Component ============================================

new Tabs(document.querySelector('.tabs'));
