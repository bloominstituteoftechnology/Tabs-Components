
class Tabs{
  constructor(thing){
    this.thing = thing;
    console.log(this.thing)
    this.thing.addEventListener('click', () => this.deselect())
  }
  deselect(){
    const links = document.querySelectorAll('.tabs-link');
    links.forEach(item => item.classList.remove('tabs-link-selected'))
    const content = document.querySelectorAll('.tabs-item');
    content.forEach(item => item.classList.remove('tabs-item-selected'))
  }
}



class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.content = document.querySelector(`.tabs-item[data-tab="${this.data}"]`)
    this.content = new TabItem(this.content);
    this.newElement = new Tabs(this.element);
    this.element.addEventListener('click', () => this.select())
  };

  select() {

    this.element.classList.add('tabs-link-selected')
    this.content.select()
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }
  select() {
    this.element.classList.add('tabs-item-selected')
  }
}


/* START HERE:

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll('.tabs-link')
links.forEach(item => new TabLink(item))
