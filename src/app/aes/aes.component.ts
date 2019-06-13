import { Component, OnInit } from "@angular/core";
import { TabView } from "tns-core-modules/ui/tab-view";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
var aesjs = require('aes-js');

@Component({
    selector: "AES",
    moduleId: module.id,
    templateUrl: "./aes.component.html"
})
export class AESComponent implements OnInit {

    public editState = true;
    public output = "";
    public input = "";

    public textBytes;
    public aesCtr;
    public encryptedBytes;
    public encryptedHex;

    public key_128 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    public key_192 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    public key_256 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    constructor() {
        // Use the component constructor to inject providers.
    }

    encrypt() {
        
        //console.log(this.input);
        //alert("Text: " + this.input);

        this.textBytes = aesjs.utils.utf8.toBytes(this.input);
        this.aesCtr = new aesjs.ModeOfOperation.ctr(this.key_128, new aesjs.Counter(5));
        this.encryptedBytes = this.aesCtr.encrypt(this.textBytes);
        this.encryptedHex = aesjs.utils.hex.fromBytes(this.encryptedBytes);

        this.output = this.encryptedHex;

    }

    decrypt() {
        
    }

    /*
    showText() {
        alert("Text: " + this.encryptedHex);
        this.output = this.encryptedHex;
    }
    */

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
