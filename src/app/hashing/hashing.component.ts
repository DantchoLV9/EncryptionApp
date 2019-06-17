import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
var sha256 = require('js-sha256');

@Component({
    selector: "Hashing",
    moduleId: module.id,
    templateUrl: "./hashing.component.html"
})
export class HashingComponent implements OnInit {

    public editState = true;

    public inputHashString = "";
    public outputHashString = "";

    public hash = sha256.create();

    constructor() {
        // Use the component constructor to inject providers.
    }

    hashInput() {

        this.hash = sha256.update(this.inputHashString);

        this.hash.update(this.inputHashString);
        this.outputHashString = this.hash.hex();

    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
