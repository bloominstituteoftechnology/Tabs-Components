/***************************************************************************************
*************************************** Class(s) ***************************************
****************************************************************************************/
class TabLink {
  //========================= Constructor =========================
  constructor(tab) {
    this.tab = tab;

    // Get the custom data attribute on the Link
    this.tabSelected = this.tab.dataset.tabname;
    
    // Using the custom data attribute get the associated Item element
    this.tabItem = document.querySelector(`.tabs-item[data-tabname='${this.tabSelected}']`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabContent = new TabContent(this.tabItem);
    
    // Add a click event listener on this instance, calling the select method on click
    this.tab.addEventListener('click', () => this.select());

  }
  //========================== Method(s) ==========================
  select() {
    // Get all of the elements with the tabs-link class
    const globalTabs = tabs;

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(globalTabs).forEach(globalTab => globalTab.classList.remove('tabs-link-selected'));

    // Add a class named "tabs-link-selected" to this link
    this.tab.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.tabContent.select();
  }
}

class TabContent{
  //========================= Constructor =========================
  constructor(content) {
    this.content = content;
  }
  //========================== Method(s) ==========================
  select() {
    // Select all ".tabs-item" elements from the DOM
    const tabItems = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    Array.from(tabItems).forEach(tabItem => tabItem.classList.remove('tabs-item-selected'));

    // Add a class named "tabs-item-selected" to this element
    this.content.classList.add('tabs-item-selected');
  }
}

/***************************************************************************************
***************************************** Main *****************************************
****************************************************************************************/
// START HERE: create a reference to the ".tabs-link" class
let tabs = document.querySelectorAll('.tabs-link');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
tabs = Array.from(tabs);

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
let tabLinks = tabs.map(tab => new TabLink(tab));