
class TabLink {
  constructor(element) {
    this.element = element
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector('.tabs-item[data-tab="${this.data}"]')
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement) // ********** this.tabItem = new TabItem(this.tabItem) is what I originally had at the end **********
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', (event) => {
      this.select() // ********** this.tabItem.select() is what I originally had **********
    })

  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link')

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(links => {
      links.classList.remove('tabs-link-selected')
    });

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected') // ********** this.element.classList links.classList.add('tabs-link-selected') is what I originally had **********
    
    // Call the select method on the item associated with this link
    this.tabItem.select() // ********** links.select() is what I originally had **********
  }
}

class TabItem {
  constructor(element) {
    this.element;
  }


  select() {
    // Select all items elements from the DOM
    const content = document.querySelectorAll('.tabs-item')
    // Remove the class "tabs-item-selected" from each element 
    Array.from(content).forEach((item) => {
      item.classList.remove('tabs-item-selected')
    })
    // Add a class named "tabs-item-selected" to this element    
    // content.classList.add('tabs-item-selected')
    // content.forEach((item) => {
    //   item.classList.remove('tabs-link-selected')
    // })

    // ********** let x = document.querySelectorAll('.tabs-item')
    // x.classList.toggle('tabs-item-selected')
    // x.classList.toggle('tabs-item-selected') is what I originally had **********
  }
}


// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll('.tabs-link');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map(tab => {
  new TabLink(tab)
})

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array