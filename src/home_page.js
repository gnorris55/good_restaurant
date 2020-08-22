const homePage = (function(){

    const template = document.getElementById("page-details");

    function render() {
        clear();
        menuTitle()
        menuList();
    }

    function clear() {
        template.innerHTML = '';
    }

    function menuTitle() {
        let title = document.createElement("h2");
        title.className = "menu-title"
        title.innerHTML = "Menu";
        template.appendChild(title);
    }

    function menuList() {
        let list = document.createElement("div");
        list.className = "list-container";
        let pepperoni = document.createElement("div");
        pepperoni.className = "item";
        pepperoni.innerHTML = "pepperoni";
        let cheese = document.createElement("div");
        cheese.className = "item";
        cheese.innerHTML = "cheese";

        list.appendChild(pepperoni);
        list.appendChild(cheese);
        template.appendChild(list);
    
    }
    return{
        render: render,
        clear: clear
    }
    
}) ();

export { homePage }