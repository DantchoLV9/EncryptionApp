import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HashingRoutingModule } from "./hashing-routing.module";
import { HashingComponent } from "./hashing.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HashingRoutingModule
    ],
    declarations: [
        HashingComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HashingModule { }
