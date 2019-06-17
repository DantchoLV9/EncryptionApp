import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DESRoutingModule } from "./des-routing.module";
import { DESComponent } from "./des.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DESRoutingModule
    ],
    declarations: [
        DESComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DESModule { }
