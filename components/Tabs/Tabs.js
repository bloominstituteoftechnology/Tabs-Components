
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
     this.element = element;
    
    // Get the custom data attribute on the Link
     this.data = this.element.dataset.tab
   
    // Using the custom data attribute get the associated Item element
     this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`)
                                                  //IMPORTANT!! above we are using string interpolation to access the data property associated with the tab we clicked using the tab data propperty which would be the tab int value.
                                                  //also we had to make sure we used specificity of .tabs-item or else we would grab the tablink
    // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem(this.itemElement)
    
    // Add a click event listener on this instance, calling the select method on click
          this.element.addEventListener('click', ()=> this.select()) 
                                                // or we can use this.select.bind(this) in place of the above arrow function
  };

  select() {
    // Get all of the elements with the tabs-link class
     const links = document.querySelectorAll('.tabs-link') // IMPORTANT!! we had to recapture a refernce to all the class associated elements to clear all elements everytime we click the link and only use the local reference of the class element being selected so that we can show as selected...
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();
    links.forEach(link => link.classList.remove('tabs-link-selected'))
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected')
    
    // Call the select method on the item associated with this link
    this.tabItem.select()  
    // here we call to the associated TabItem that we linked above - via this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`)
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
     this.element = element;
     console.log(this.element)
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
     const items = document.querySelectorAll('.tabs-item')

    // Remove the class "tabs-item-selected" from each element
    items.forEach(item => item.classList.remove('tabs-item-selected'))
    // Add a class named "tabs-item-selected" to this element
     this.element.classList.add('tabs-item-selected') 
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/


links = document.querySelectorAll('.tabs-link');

links.forEach(link =>
     new TabLink(link)
);


