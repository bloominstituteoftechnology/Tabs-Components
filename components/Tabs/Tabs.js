class TabLink {
    constructor(element) {


        this.element = element;

        // Get the custom data attribute on the Link
        this.data = this.element.dataset.tab;

        // Using the custom data attribute get the associated Item element
        this.itemElement = document.querySelectorAll(`.tabs-item[data-tab='${this.data}']`); //****************

        // Using the Item element, create a new instance of the TabItem class
        this.tabItem = new TabItem(this.itemElement);

        // Add a click event listener on this instance, calling the select method on click
        this.element.addEventListener('click', e => { this.select(e) });

    };

    select() {
        //this.tabItem.toggle();
        //console.log(this.tabItem);
        // Get all of the elements with the tabs-link class
        const links = document.querySelectorAll(`.tabs-link`);

        // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
        Array.from(links).forEach((link) => { return link.classList.remove('tabs-link-selected'); })
            //console.log(links);

        // Add a class named "tabs-link-selected" to this link
        //console.log(this.element);
        this.element.classList.add('tabs-link-selected');

        // Call the select method on the item associated with this link
        this.tabItem.select();


    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        // this.element.classList.toggle('');

        // Select all ".tabs-item" elements from the DOM
        const tabsSelected = document.querySelectorAll('.tabs-item');
        // Remove the class "tabs-item-selected" from each element
        Array.from(tabsSelected).forEach((one) => { return one.classList.remove('tabs-item-selected'); })
            //console.log(tabsSelected);
            // Add a class named "tabs-item-selected" to this element.
        this.element.classList.add('tabs-item-selected');
        //select ();

    }
}


// START HERE: create a reference to the ".tabs-link" class
let links = document.querySelectorAll('.tabs-link');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map((link) => { new TabLink(link); });

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array