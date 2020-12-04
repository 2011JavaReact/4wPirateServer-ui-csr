import { NavbarComponent } from "../pages/navbar.js";

// component is the html string that should be injected, target is the id of the intended parent element
var injectHtml = (component, target) => {
    document.getElementById(target).innerHTML = component;
}

// this function is meant to render the view of the user as they visit the page for the first time
var renderLanding = () =>{
    injectHtml(NavbarComponent(),"container");
}

renderLanding();