**TABS-COMPONENTS** 
----------------------------------

Topics:
* Constructors with ES6 class syntax
* `data` attributes

In this project, our design team has already built an HTML/CSS web page for us, our job is to add javascript functionality. 

## Description

#### Part One (The Dropdown):
* Once you load the page, you will notice a dropdown menu in the upper left side of the page. Currently when you click on it nothing happens. We will build out the functionality to allow a dropdown menu to open and close when a user clicks on the dropdown button.
  * Study the HTML in the index.html file corresponding to the dropdown component.
  * Study the LESS file in the Dropdown folder. 
  * With your knowledge of the HTML and CSS, complete the `Dropdown.js` file. You will be creating a dropdown component.

#### Part Two (Tabs):
* Now that we have an idea of how to create a component with a single class, we will be creating a complex component made up of two smaller components. The greater component wrapper will be called `Tabs` and the smaller component within it will be called `TabsLink` and `TabsItem`.
  * The `Tabs` component will be the overall wrapper of the sub components. This higher level component will find and create the sub components within it. This component will also keep track of which tab is currently selected, maintaining the state of the component as a whole. It will also act as liason to the sub-components getting data from other sub-components for them. 
  * The `TabsLink` component will be on each of what we may consider the `tabs` on top of the box. These links will control the associated item, as well as selcting and deselecting themselves.
  * The `TabsItem` component will be the text displayed when a tab is selcted. It will share a data attribute with it's corresponding tab, and should only show when it's tab has been selected.

* The `Tabs.js` file starts at the bottom of the page and then jumps around. Pay attention to what is being called and when. Study the corresponding HTML and LESS to get a better idea of how the tabs were built.

* Once you have completed the above, add a couple Tabs to the HTML in order to see first hand how great building webpages with components is!

#### Stretch Goals:
* Animations. (Use the animation library of your choice)
  * Get the dropdown to slide in and out, rather than just appearing and dissapearing
  * Get the TabsItem text to fade in and out, or slide in and out.
  * Look through the LESS code and see where you can refactor using animations to acheive similar results.
* Add styling using the LESS files.
* Remove the boxes on the top card and replace them with an image carousel. This will have to be done from scratch, and should be pretty difficult, but it uses the same techniques as the `Tabs` component. Give it a left and right button, and a number of images that scroll as the buttons are pressed.
  