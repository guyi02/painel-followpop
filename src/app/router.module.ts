import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PainelComponent } from "./painel/painel.component";
import { LoginComponent } from "./login/login.component";
import { RegistrarComponent } from "./registrar/registrar.component";
import { AuthGuard } from "./auth.guard";


const router: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'painel', component: PainelComponent, canActivate: [AuthGuard] },
    { path: 'registrar', component: RegistrarComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRouterModule {

}