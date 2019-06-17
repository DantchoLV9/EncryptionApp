import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MD5RoutingModule } from "./md5-routing.module";
import { MD5Component } from "./md5.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MD5RoutingModule
    ],
    declarations: [
        MD5Component
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MD5Module { }
