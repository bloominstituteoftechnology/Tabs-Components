class Tabs {
  constructor(tab) {

    this.tab = tab;
    // console.log(this.tab)
  
    this.data = this.tab.dataset.tab;
   
    this.tabLink = new TabLink(this.tab);

    this.selectedTab = document.querySelector(`.tabs-link-selected`);
    // console.log("selected tab: ", this.selectedTab);

    this.tab.addEventListener("click", () => {
      
      // links.forEach(link => link.classList.remove("tabs-link-selected"));
    });
  }//Tabs constructor
}//Tabs


class TabLink {
  constructor(element) {
    this.element = element;
// console.log(this.element)
    this.data = this.element.dataset.tab;

    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);

    this.tabItem = new TabItem(this.itemElement);

    // this.element.addEventListener("click", () => {this.select()});

    this.element.addEventListener("click", () => {
      if (this.element.classList.contains("tabs-link-selected")) {
        this.deselect();
      } else {
        this.select();
      }
      });

  }//TabLink constructor


  select() {

    const links = document.querySelectorAll(".tabs-link");

    links.forEach(link => link.classList.remove("tabs-link-selected"));
    console.log("TabLink select method");

    this.element.classList.add("tabs-link-selected");

    this.tabItem.select();

  }//TabLink select()


//Stretch attempt:
  // deselect() {

  //   console.log("TabLink deselect method");
    
  //   this.element.classList.remove("tabs-link-selected");

  //   this.tabItem.deselect();

  // }//TabLink deselect()
}//TabLink




class TabItem {
  constructor(element) {

    this.element = element;
   
  }

  select() {
  
    console.log("TabItem select method");
    const items = document.querySelectorAll(".tabs-item");

    items.forEach(item => item.classList.remove("tabs-item-selected"));

    this.element.classList.add("tabs-item-selected");

  }//TabItem select()


// Stretch attempt:
  // deselect() {

  //   console.log("TabItem deselect method");

  //   this.element.classList.remove("tabs-item-selected");

  // }//TabItem deselect()
}//TabItem



let links = document.querySelectorAll(".tabs-link").forEach(link => new Tabs(link));




/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

// let links = document.querySelectorAll(".tabs-link")
//             .forEach(link => new TabLink(link));



//TabLink instructions
    // Assign this.element to the passed in DOM element
    // this.element;
    // Get the custom data attribute on the Link
    // this.data;
    // console.log("data: ", this.data);
    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    // Add a click event listener on this instance, calling the select method on click


    // Get all of the elements with the tabs-link class
    // const links;


    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();


    // Add a class named "tabs-link-selected" to this link
    // this.element;


    // Call the select method on the item associated with this link


    //TabItem instructions
     // Assign this.element to the passed in element
    // this.element;

      // Select all ".tabs-item" elements from the DOM
    // const items;
    // Remove the class "tabs-item-selected" from each element


    // Add a class named "tabs-item-selected" to this element
    //this.element;