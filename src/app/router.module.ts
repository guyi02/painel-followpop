import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PainelComponent } from "./painel/painel.component";
import { LoginComponent } from "./login/login.component";

const router: Routes = [
    { path: '', component: LoginComponent },
    { path: 'painel', component: PainelComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})
export class AppRouterModule {

}