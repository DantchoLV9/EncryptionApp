import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RSARoutingModule } from "./rsa-routing.module";
import { RSAComponent } from "./rsa.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RSARoutingModule
    ],
    declarations: [
        RSAComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RSAModule { }
