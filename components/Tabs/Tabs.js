class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-link[data-tab="${this.data}"]`);
    this.tabItem = new TabItem(this.itemElement);
    this.tabItem.element.addEventListener("click", () => this.select());
  };

  select() {
    const links = document.querySelectorAll(".tabs-link");

    Array.from(links).forEach(link => link.classList.remove("tabs-link-selected"));

    this.element.classList.add("tabs-link-selected");
    
    this.tabItem.select();
  }
};

class TabItem {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
  }

  select() {
    const itemsElements = document.querySelectorAll(".tabs-item");

    Array.from(itemsElements).forEach(itemElement => TweenMax.to(itemElement, 0, {display: "none"}));

    TweenMax.fromTo(document.querySelector(`.tabs-item[data-tab="${this.data}"]`), 1, {x: 200, opacity: 0, display: "block"}, {x: 0, opacity: 1, display: "block"});
  }
};

let links = document.querySelectorAll(".tabs-link");

links = Array.from(links).map(link => new TabLink(link));

links[0].select();
