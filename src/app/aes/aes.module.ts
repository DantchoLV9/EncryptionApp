import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AESRoutingModule } from "./aes-routing.module";
import { AESComponent } from "./aes.component";

import {NativeScriptFormsModule} from "nativescript-angular/forms"

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AESRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AESComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AESModule { }
