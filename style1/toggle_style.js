function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    let styleElement = document.getElementById("mainStyleSheet");

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    let currentStyle = styleElement.getAttribute("href");

    // 1 (c) Determine new stylesheet file name
    let newStyle = "../styles.css";
    if (currentStyle === "../styles.css") newStyle = "../other_styles.css";

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    styleElement.setAttribute("href", newStyle);

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("preferredStyle", newStyle);
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    let preferredStyle = localStorage.getItem("preferredStyle");
    
    if (preferredStyle !== "../styles.css" && preferredStyle !== "../other_styles.css") {
        preferredStyle = "../styles.css";
    }

    // 2 (b) get html style element by ID
    styleElement = document.getElementById("mainStyleSheet");

    // 2 (c) replace href attribute of html element.
    styleElement.setAttribute("href", preferredStyle);
}


