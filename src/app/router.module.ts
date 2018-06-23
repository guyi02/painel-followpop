import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PainelComponent } from "./painel/painel.component";
import { LoginComponent } from "./login/login.component";
import { RegistrarComponent } from "./registrar/registrar.component";
import { AuthGuard } from "./auth.guard";
import { FoundsComponent } from "./painel/founds/founds.component";
import { DashboardComponent } from "./painel/dashboard/dashboard.component";
import { InstaCurtidasComponent } from "./painel/midia/insta-curtidas/insta-curtidas.component";
import { InstaSeguidoresComponent } from "./painel/midia/insta-seguidores/insta-seguidores.component";


const router: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'painel', component: PainelComponent, canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: "full" },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'founds', component: FoundsComponent },
            { path: 'insta-curtidas', component: InstaCurtidasComponent },
            { path: 'insta-seguidores', component: InstaSeguidoresComponent },
        ]
    },
    { path: 'registrar', component: RegistrarComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRouterModule {

}