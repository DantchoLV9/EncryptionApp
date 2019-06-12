import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AESRoutingModule } from "./aes-routing.module";
import { AESComponent } from "./aes.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AESRoutingModule
    ],
    declarations: [
        AESComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AESModule { }
