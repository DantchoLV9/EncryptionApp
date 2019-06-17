import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "aes", loadChildren: "~/app/aes/aes.module#AESModule" },
    { path: "hashing", loadChildren: "~/app/hashing/hashing.module#HashingModule" },
    { path: "des", loadChildren: "~/app/des/des.module#DESModule" },
    { path: "tdes", loadChildren: "~/app/tdes/tdes.module#TDESModule" },
    { path: "rsa", loadChildren: "~/app/rsa/rsa.module#RSAModule" },
    { path: "blowfish", loadChildren: "~/app/blowfish/blowfish.module#BlowfishModule" },
    //{ path: "twofish", loadChildren: "~/app/twofish/twofish.module#TwofishModule" },
    //{ path: "md5", loadChildren: "~/app/md5/md5.module#MD5Module" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
