import { swapComponent } from "./componentInjector.js";
import { ShowCaseComponent } from "../pages/ShowcaseComponent.js";
import { PirateListComponent } from "../pages/PirateListComponent.js";
import {PirateFormComponent} from '../pages/PirateFormComponent.js'
//this function will attach event listeners to the buttons so they can swap out components
export const setRoutes = ()=>{
    document.getElementById("home-button").addEventListener("click", ()=>{
        console.log("home button clicked");
        swapComponent(ShowCaseComponent());
    });
    document.getElementById("view-button").addEventListener("click", ()=>{
        console.log("view button clicked");
        swapComponent(PirateListComponent());
    });
    document.getElementById("add-button").addEventListener("click", ()=>{
        console.log("add button clicked");
        swapComponent(PirateFormComponent());
    });
}