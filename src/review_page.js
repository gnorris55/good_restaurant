const reviewPage = (function() {

    const template = document.getElementById("page-details");

    function render() {
        alert("reviews!")
    }

    function clear() {
        template.innerHTML = "";
    }

    return {
        render: render,
        clear: clear
    };

}) ();

export { reviewPage }