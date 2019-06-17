import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TDESRoutingModule } from "./tdes-routing.module";
import { TDESComponent } from "./tdes.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TDESRoutingModule
    ],
    declarations: [
        TDESComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TDESModule { }
