import _, { zip } from 'lodash';
import {homePage} from './home_page';
import {reviewPage} from './review_page';

const index = (function() {

  const template = document.getElementById("contents");

  function render() {
    links();
    titleHTML();
    homePage.render();
  }

  function titleHTML() {
      let title = document.createElement("h1");
      title.id = "menuTitle";
      title.innerHTML = "PizzaJoint";
      template.appendChild(title);
  }
  function links() {
    let linkList = document.createElement("div");
    

    let mainPageButton = document.createElement("button");
    mainPageButton.innerHTML = "main page"
    mainPageButton.onclick = function() {
      homePage.render();
    }
    let reviewPageButton = document.createElement("button")
    reviewPageButton.onclick = function() {
      //TODO
      homePage.clear();
      reviewPage.render();
    }
    reviewPageButton.innerHTML = "Review Page"


    linkList.appendChild(reviewPageButton);
    linkList.appendChild(mainPageButton);
    template.appendChild(linkList);
  }

  return {
    render: render
  };

}) ();


index.render();