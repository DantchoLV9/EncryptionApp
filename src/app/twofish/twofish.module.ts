import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TwofishRoutingModule } from "./twofish-routing.module";
import { TwofishComponent } from "./twofish.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TwofishRoutingModule
    ],
    declarations: [
        TwofishComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TwofishModule { }
