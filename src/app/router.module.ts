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
import { InstaStoriesComponent } from "./painel/midia/insta-stories/insta-stories.component";
import { InstaComentariosComponent } from "./painel/midia/insta-comentarios/insta-comentarios.component";
import { FaceCurtidaspostComponent } from "./painel/midia/face-curtidaspost/face-curtidaspost.component";
import { FaceCurtidaspaginaComponent } from "./painel/midia/face-curtidaspagina/face-curtidaspagina.component";
import { YoutubeViewsComponent } from "./painel/midia/youtube-views/youtube-views.component";
import { TermosComponent } from "./painel/midia/termos/termos.component";
import { DuvidasComponent } from "./painel/dashboard/duvidas/duvidas.component";
import { ForgotComponent } from "./forgot/forgot.component";
import { YoutubeSubscribeComponent } from "./painel/midia/youtube-subscribe/youtube-subscribe.component";
import { PacotesComponent } from "./painel/midia/pacotes/pacotes.component";
import { InstaCurtidasGlobalComponent } from "./painel/midia/insta-curtidas-global/insta-curtidas-global.component";
import { InstaSeguidoresGlComponent } from "./painel/midia/insta-seguidores-gl/insta-seguidores-gl.component";
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
            { path: 'insta-curtidas-global', component: InstaCurtidasGlobalComponent },
            { path: 'insta-seguidores', component: InstaSeguidoresComponent },
            { path: 'insta-seguidores-gl', component: InstaSeguidoresGlComponent },
            { path: 'insta-stories', component: InstaStoriesComponent },
            { path: 'insta-comentarios', component: InstaComentariosComponent },
            { path: 'face-curtidaspost', component: FaceCurtidaspostComponent },
            { path: 'face-curtidaspagina', component: FaceCurtidaspaginaComponent },
            { path: 'youtube-views', component: YoutubeViewsComponent },
            { path: 'youtube-subscribe', component: YoutubeSubscribeComponent },
            { path: 'termos', component: TermosComponent },
            { path: 'duvidas', component: DuvidasComponent },
            { path: 'pacotes', component: PacotesComponent },




        ]
    },
    { path: 'registrar', component: RegistrarComponent },
    { path: 'minha-senha', component: ForgotComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRouterModule {

}