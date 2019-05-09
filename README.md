# TABS-COMPONENTS

Topics:

- Constructors with ES6 class syntax

- `data` attributes

In this project, our design team has already built an HTML/CSS web page for us, our job is to add javascript functionality.

## Set Up The Project With Git

**Follow these steps to set up and work on your project:**

- [ ] Create a forked copy of this project.
- [ ] Add your project manager as collaborator on Github.
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

**Follow these steps for completing your project.**

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo). **Please don't merge your own pull request**
- [ ] Add your project manager as a reviewer on the pull-request
- [ ] Your project manager will count the project as complete by merging the branch back into master.

## Description

### Part One (The Dropdown)

- Once you load the page, you will notice a dropdown menu in the upper left side of the page. Currently when you click on it nothing happens. We will build out the functionality to allow a dropdown menu to open and close when a user clicks on the dropdown button.
  - Study the HTML in the index.html file corresponding to the dropdown component.
  - Study the LESS file in the Dropdown folder.
  - With your knowledge of the HTML and CSS, complete the `Dropdown.js` file. You will be creating a dropdown component.

### Part Two (Tabs)

- Now that we have an idea of how to create a component with a single class, we will be creating a complex component made up of itself and a sub component. The greater component wrapper will be called `TabLink` and the smaller component it will create will be called `TabItem`.

  - The `TabLink` component will be the overall wrapper of the sub component. This higher level component will find and create the sub component within it. This component will be on each of what we may consider the `tabs` on top of the box. These links will control the associated item, as well as selecting and deselecting themselves.
  - The `TabItem` component will be the text displayed when a tab is selected. It will share a data attribute with it's corresponding tab, and should only show when it's tab has been selected.

- The `Tabs.js` file starts at the bottom of the page and then jumps around. Pay attention to what is being called and when. Study the corresponding HTML and LESS to get a better idea of how the tabs were built.

- Once you have completed the above, add a couple Tabs to the HTML in order to see first hand how great building webpages with components is!

### Stretch Goals

- Create a Single `Tabs` component that creates all instances of `TabLink`. It will also hold the currently selected tab.
  - Add a `deselect` method to each the `TabItem` and `TabLink` classes. This will deselect that specific tab.
  - Remove the code deselecting all `TabLink`s and `TabItem`s, only relying on the deselect method.
  - `Tabs` should deselect the currently selected tab each time a new tab is selected.
- Animations. (Use the animation library of your choice)
  - Get the dropdown to slide in and out, rather than just appearing and disappearing
  - Get the TabsItem text to fade in and out, or slide in and out.
  - Look through the LESS code and see where you can refactor using animations to achieve similar results.
- Add styling using the LESS files.
- Remove the boxes on the top card and replace them with an image carousel. This will have to be done from scratch, and should be pretty difficult, but it uses the same techniques as the `Tabs` component. Give it a left and right button, and a number of images that scroll as the buttons are pressed.
