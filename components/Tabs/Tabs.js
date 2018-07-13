class Tabs {
  //the base class creating in the bottom line of code. 

  constructor(element) {
    //passing in the new object that had been recieved, element could be anything.element is a DOM element.  
    this.element = element;
    //writing properties same as this.gender="M" or this.color="Red". 
    // create a reference to the ".tabs-link" class nested in your tab object
    this.links = this.element.querySelectorAll(".tabs-link");
    //again creating a new property this.links. 
    //this.element.querySelectorAll(".tabs-link")- this is what this.link is. 
    //it is taking this.element then querySelectorAll(".tabs-link") is taking in a class that was creating in the HTML. 
    //it is looking inside of the element to find ".tabs-link". 
    console.log(this.links)
    // This step will map over the array creating new TabsLink class instances of each link.  No need to update anything here, just study what is going on.  Notice that we are creating another new object using the TabsLink class.
    this.links = Array.from(this.links).map( link => {
      return new TabsLink(link, this);
    });
    // Set the active link to the first item in the array
    //this.activeLink = this.links[0]- setting it up so that the first tab that is open is tab1 when the page is first opened
    //and refreshed. 
    this.activeLink = this.links[0];
    // Nothing to update here, just notice we are invoking the init() method
    this.init();
  }


  init() { 
    // invoke the method select() on activeLink
    this.activeLink.select();
  }
 

  updateActive(newActive) {
    // invoke the method deselect() on activeLink
    //invoking a method that is created below, class are hoasted. 
    this.activeLink.deselect();
    // assign this.activeLink to the new active link (newActive)
    this.activeLink = newActive;
  }

  getTab(data) {
    // return a reference to the element's data attribute
    return this.element.querySelector(`.tabs-item[data-tab="${data}"]`); 
    // querySelector(`.tabs-item[data-tab="${data}"]`)
    //.tabs-item is the class of the object in HTML that we want to claim
    //data-tab is the given data
    //"${data}"]- is the content that is held in the variable, the quote. 
  }
}
// another base class created in Tabs
class TabsLink {
  // notice that we passed in the link reference as well as a reference to the parent class.
  constructor(link, parent) {
    this.link = link;
    // assign this.tabs to parent
    this.tabs = parent;
    // Using the method from the parent class above, pass in a reference to the custom data attribute.  
    this.tabsItem = parent.getTab(this.link.dataset.tab);
   
    // Create a new TabsItem object that passes in a tabsItem value that you just created above
    this.tabsItem = new TabsItem(this.tabsItem);
    this.link.addEventListener('click', () => {
      this.tabs.updateActive(this);
      // invoke the select() method on this
      this.select();
    });
  };

  select() {
    // Add a class named "tabs-link-selected" to the link
    this.link.classList.add("tabs-link-selected"); 
    // Notice that we are using the select method on tabsItem
    this.tabsItem.select();
  }


  deselect() {
    // Remove a class named "tabs-link-selected" from the link
    this.link.classList.remove("tabs-link-selected"); 
    // Notice that we are using the deselect method on tabsItem
    this.tabsItem.deselect();
  }
}


class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Add a class named "tabs-item-selected" to the element 
    this.element.classList.add("tabs-item-selected");
  }

  deselect() {
    // Remove a class named "tabs-item-selected" from the element 
    this.element.classList.remove("tabs-item-selected");
    // Congrats, you finished all the instruction, check out your tab navigator!
  }
}


// START HERE: create a reference to the ".tabs" classes
let tabs = document.querySelectorAll('.tabs');
//let tabs - claiming a variable; 
//document.querySelectorAll('tabs') - selecting all the elements with the class of tabs

// map through each tabs element and create a new Tabs object.  Be sure to pass in a reference to the tab when creating the Tabs object.
tabs = Array.from(tabs).map(tab => new Tabs(tab));
//tabs- the variable declared in the previous line of code.
//Array.from(tabs)- convert the nodelist into an array(sidenote: querySelectorAll creates nodelists)
//map(tab => new Tabs(tab)) - map over the array to create new objects, tab could be anything, new Tabs is creating a new base class
console.log(Tabs);
