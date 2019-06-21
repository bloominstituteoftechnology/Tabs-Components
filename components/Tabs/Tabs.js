class TabLink {
	constructor(element) {
		// Assign this.element to the passed in DOM element
		this.element = element;

		// Get the custom data attribute on the Link
		this.data = this.element.dataset.tab;
		// console.log(this.data);

		// Using the custom data attribute get the associated Item element
		this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
		// console.log(this.itemElement);

		// Using the Item element, create a new instance of the TabItem class
		this.tabItem = new TabItem(this.itemElement);
		// console.log(this.tabItem);

		// Add a click event listener on this instance, calling the select method on click
		this.element.addEventListener('click', () => this.select());
	}

	select() {
		// Get all of the elements with the tabs-link class
		const links = document.querySelectorAll('.tabs-link');
		// console.log(links);

		// Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
		Array.from(links).forEach(function(linkItem) {
			linkItem.classList.remove('tabs-link-selected');
		});

		// Add a class named "tabs-link-selected" to this link
		this.element.classList.add('tabs-link-selected');

		// Call the select method on the item associated with this link

		this.tabItem.select();
		// console.log(this.tabItem.dataset);
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

		// Remove the class "tabs-item-selected" from each element
		Array.from(items).forEach(function(tabItem) {
			tabItem.classList.remove('tabs-item-selected');
		});

		// Add a class named "tabs-item-selected" to this element
		this.element.classList.add('tabs-item-selected');
	}
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const links = document.querySelectorAll('.tabs-link');

links.forEach(function(tab) {
	// console.log(tab);
	// console.log(new TabLink(tab));
	return new TabLink(tab);
});

// class TabsItem {
// 	constructor(element) {
// 		this.element = element;
// 	}

// 	select() {
// 		this.element.classList.add('tabs-item-selected');
// 	}

// 	deselect() {
// 		this.element.classList.remove('tabs-item-selected');
// 	}
// }

// class TabsLink {
// 	constructor(element, parent) {
// 		this.element = element;
// 		this.tabs = parent;
// 		this.tabsItem = parent.getTab(this.element.dataset.tab);
// 		this.tabsItem = new TabsItem(this.tabsItem);
// 		this.element.addEventListener('click', () => {
// 			this.tabs.updateActive(this);
// 			this.select();
// 		});
// 	}

// 	select() {
// 		this.element.classList.add('tabs-link-selected');
// 		this.tabsItem.select();
// 	}

// 	deselect() {
// 		this.element.classList.remove('tabs-link-selected');
// 		this.tabsItem.deselect();
// 	}
// }

// class Tabs {
// 	constructor(element) {
// 		this.element = element;
// 		this.links = this.element.querySelectorAll('.tabs-link');
// 		this.links = Array.from(this.links).map((link) => {
// 			return new TabsLink(link, this);
// 		});
// 		this.activeLink = this.links[0];
// 		this.init();
// 	}

// 	init() {
// 		this.activeLink.select();
// 	}

// 	updateActive(newActive) {
// 		this.activeLink.deselect();
// 		this.activeLink = newActive;
// 	}

// 	getTab(data) {
// 		return this.element.querySelector(`.tabs-item[data-tab="${data}"]`);
// 	}
// }

// let tabs = document.querySelectorAll('.tabs');
// tabs = Array.from(tabs).map((tab) => new Tabs(tab));
