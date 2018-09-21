

class TabLink{
  constructor(element){
  this.element = element;
  
  this.element.addEventListener('click',this.attachClick.bind(this));
  this.element.classList.remove('tabs-link-selected');
  const tabNumber = this.element.dataset.tab;

  this.tabItem = document.querySelector(`.tabs-item[data-tab='${tabNumber}']`);
  this.tab = new TabItem(this.tabItem);
  }
  attachClick(event){
    let el = document.querySelectorAll('.tabs-link');
    el = Array.from(el).forEach(element=>{element.classList.remove('tabs-link-selected')})
    this.element.classList.toggle('tabs-link-selected')
    this.tab.select();
  }

}


class TabItem {
  constructor(element){
    this.element = element;
  }
  select(event){  
      let items = document.querySelectorAll('.tabs-item');
      items = Array.from(items).forEach(element => {element.classList.remove('tabs-item-selected')});
      this.element.classList.add('tabs-item-selected');
  }

}

let tabSection = document.querySelector('.tabs');
let links = tabSection.querySelectorAll('.tabs-link');
links = Array.from(links).map((element)=>{ new TabLink(element) });



