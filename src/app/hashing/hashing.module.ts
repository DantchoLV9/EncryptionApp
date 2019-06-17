import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HashingRoutingModule } from "./hashing-routing.module";
import { HashingComponent } from "./hashing.component";

import {NativeScriptFormsModule} from "nativescript-angular/forms"

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HashingRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        HashingComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HashingModule { }
