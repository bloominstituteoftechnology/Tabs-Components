// * Create a Single `Tabs` component that creates all instances of `TabLink`.
// It will also hold the currently selected tab.
//   * Add a `deselect` method to each the `TabItem` and `TabLink` classes. This will
//   deselect that specific tab.
//   * Remove the code deselecting all `TabLink`s and `TabItem`s, only relying on the
//   deselect method.
//   * `Tabs` should deselect the currently selected tab each time a new tab is
//   selected.

class Tabs {
  constructor(tabs) {
    this.element = tabs
    this.links = Array.from(this.element.querySelectorAll('.tabs-link')).map(
      link => new TabLink(link)
    )
    this.links.forEach(link => {
      link.element.addEventListener('click', () => {
        this.deselectAll()
        this.select(link)
      })
    })
    this.select(this.links[0])
  }

  select(link) {
    link.select()
    link.tabItem.select()
  }

  deselectAll() {
    this.links.forEach(link => {
      link.deselect()
      link.tabItem.deselect()
    })
  }
}

class TabLink {
  constructor(element) {
    this.element = element
    this.data = this.element.dataset.tab
    this.itemElement = document.querySelector(
      `.tabs-item[data-tab='${this.data}']`
    )
    this.tabItem = new TabItem(this.itemElement)
    // this.element.addEventListener('click', () => {
    //   this.select()
    // })
  }

  select() {
    // const links = document.querySelectorAll('.tabs-link')
    // Array.from(links).forEach(link =>
    //   link.classList.remove('tabs-link-selected')
    // )
    this.element.classList.add('tabs-link-selected')
    // this.tabItem.select()
  }

  deselect() {
    this.element.classList.remove('tabs-link-selected')
  }
}

class TabItem {
  constructor(element) {
    this.element = element
  }

  select() {
    // const items = document.querySelectorAll('.tabs-item')
    // Array.from(items).forEach(item =>
    //   item.classList.remove('tabs-item-selected')
    // )
    this.element.classList.add('tabs-item-selected')
  }

  deselect() {
    this.element.classList.remove('tabs-item-selected')
  }
}

// let links = document.querySelectorAll('.tabs-link')
// links = Array.from(links).map(link => new TabLink(link))

// links[0].select()

// for tabs component
const tabs = new Tabs(document.querySelector('.tabs'))
