class TabLink {
  constructor(link){
    this.link = link;// outputs each link div.
    
    this.linkData = this.link.dataset.tab;// outputs the dataset values 1, 2, 3, 4.
    
    this.tabItem = document.querySelector(`.tabs-item[data-tab="${this.linkData}"]`)//ouputs each dataset
    
    this.tabItem = new TabContent(this.tabItem);
    this.link.addEventListener('click', _ => this.select());
  }
  select(){     
    this.tabItem.toggleItem();
  }
}


class TabContent {
  constructor(tabItem){
    this.tabItem = tabItem;
    
  }
  toggleItem(){
    this.tabItem.classList.toggle('tabs-item-selected');
  }
}
let tabLinks = document.querySelectorAll('.tabs-link').forEach(link => new TabLink(link));
