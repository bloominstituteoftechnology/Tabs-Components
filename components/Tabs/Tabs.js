
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    // console.log('hi')

    // Get the custom data attribute on the Link
    this.elementData = this.element.dataset.tab
    // console.log(this.elementData)
    // Using the custom data attribute get the associated Item element
    this.itemElementContent = document.querySelector(`.tabs-items .tabs-item[data-tab ='${this.elementData}']`)
    
    // Using the Item element, create a new instance of the TabItem class
    this.itemElementContent = new TabItem(this.itemElementContent);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => { this.select() })
  };

  select() {
    // console.log('hello')
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');
    // console.log(links)

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach( (subList) => {
        subList.classList.remove('tabs-link-selected');
      })
    // console.log(links)


    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');

    
    // Call the select method on the item associated with this link
    this.itemElementContent.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');
    // console.log(items)

    // Remove the class "tabs-item-selected" from each element 
    Array.from(items).forEach( (subList) => {
        subList.classList.remove('tabs-item-selected');
    })
    // Add a class named "tabs-item-selected" to this element

    this.element.classList.add('tabs-item-selected')
    // this.element.classList.add('tabs-link-selected')
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const links = document.querySelectorAll(' .tabs-links .tabs-link').forEach(link => new TabLink(link));