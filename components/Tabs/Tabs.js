
class TabLink {
  constructor(link) {
    this.link = link;
    this.link.addEventListener('click', ()=>{this.whenClick()});
    this.link.addEventListener('mouseout', ()=>{this.mouseOut()});
    // Get the custom data attribute on the Link
    this.data = this.link.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.tabItem = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.tabItem);
    
    // Add a click event listener on this instance, calling the select method on click

  };

whenClick(){
  this.tabItem.toggleItem();
}
mouseOut(){
  this.tabItem.mouseAway();
}
}

class TabItem {
  constructor(tabItem) {
    this.tabItem = tabItem;
  }

toggleItem(){
  this.tabItem.classList.toggle('tabs-item-selected');
}
mouseAway(){
  this.tabItem.classList.remove('tabs-item-selected');
}
}


// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll('.tabs');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map(link => new TabLink(link));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array