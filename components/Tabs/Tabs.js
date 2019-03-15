class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    // this.element;
  
    this.element = element;
    // Get the custom data attribute on the Link
    // this.data;
    this.data = this.element.dataset.tab;
   
    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    this.item = document.querySelector(`.tabs-item[data-tab='${this.element.dataset.tab}']`);
  
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.item = new TabItem(this.item);
   
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener("click", this.select.bind(this));
  };

  select(link) {
    // Get all of the elements with the tabs-link class
    // const links;
    const links = document.querySelectorAll(".tabs-link")
    console.log(links);
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();
    Array.from(links).forEach(function (element) {
      element.classList.remove("tabs-link-selected");
      console.log(element);

    });
   
    // Add a class named "tabs-link-selected" to this link
    // this.element;
    this.element.classList.add("tabs-link-selected");
    // Call the select method on the item associated with this link
    
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;
    const items = document.querySelectorAll(".tabs-item");
    // Remove the class "tabs-item-selected" from each element
    items.forEach(function(){
      items.classList.remove("tabs-item");
    })
    // Add a class named "tabs-item-selected" to this element
    //this.element;
    this.element.classList.add("tabs-item-selected");
  }
}


const links = document.querySelectorAll(".tabs-link");

links.forEach(function(link){
  return new TabLink(link);
});