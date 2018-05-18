
class TabsItem {
  constructor($element) {
    // Attach dom element to object. Example in Tabs class
  }

  select() {
    // Selects the item by adding a class
    /* Stretch goal: use a built in jQuery method to show the item */
  }

  deselect() {
    // Deselects the item by removing a class
    /* Stretch goal: use a built in jQuery method to hide the item */
  }
}

class TabsLink {
  constructor($element, parent) {
    // Attach the element to this instance of the TabsLink class
    this.element;
    // Attach Tabs (parent) to this instance of the TabsLink class
    this.tabs;
    /* Use the getTab method on the parent to find the corresponding TabItem for this link
       hint: use the data-tab attribute */
    this.tabsItem = parent.getTab();
    // Reassign this.tabsItem to be a new instance of TabsItem, passing it this.tabsItem
    this.tabsItem;
    /* Add an click event to the main element, this will update the active tab on the parent, 
       and should call select on this tab */
    this.element.click( () => {
      this.tabs.updateActive(this);

    });
  };

  select() {
    // add selected class to this link
    // select the associated tab item
  }

  deselect() {
    // deselect this link
    // deselect the associated tab item
  }
}

class Tabs {
  constructor($element) {
    this.element = $element;

    // Using jQuery's .find method, get an array of all links on the element
    this.links;

    // This step will map over the array creating new TabsLink class isntances of each link.
    this.links = this.links.map((index, link) => {
      return new TabsLink($(link), this);
    });

    // Select the first Link and set it to the activeLink
    this.activeLink;
    this.init();
  }

  init() {
    // Select the first link and tab upon ititialization
  }

  updateActive(newActive) {
    // Deselect the old active link

    // Assign the new active link

  }

  getTab(data) {
    // Use the tab item classname and the data attribute to select the proper item
  }

}

/* Using jQuery, select all instances of the class tabs, map over it and create new instances 
   of the Tabs class with the element */
let tabs = $();
tabs = tabs.map();

