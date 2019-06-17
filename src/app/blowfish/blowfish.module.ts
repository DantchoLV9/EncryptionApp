import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BlowfishRoutingModule } from "./blowfish-routing.module";
import { BlowfishComponent } from "./blowfish.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        BlowfishRoutingModule
    ],
    declarations: [
        BlowfishComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BlowfishModule { }
