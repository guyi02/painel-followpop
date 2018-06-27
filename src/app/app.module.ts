import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { LoginComponent } from './login/login.component';
import { AppRouterModule } from './router.module';
import { environment } from '../environments/environment';

import { ReactiveFormsModule } from '@angular/forms';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegistrarComponent } from './registrar/registrar.component';
import { FoundsComponent } from './painel/founds/founds.component';
import { DashboardComponent } from './painel/dashboard/dashboard.component';
import { InstaCurtidasComponent } from './painel/midia/insta-curtidas/insta-curtidas.component';
import { InstaSeguidoresComponent } from './painel/midia/insta-seguidores/insta-seguidores.component';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { InstaStoriesComponent } from './painel/midia/insta-stories/insta-stories.component';
import { InstaComentariosComponent } from './painel/midia/insta-comentarios/insta-comentarios.component';
import { FaceCurtidaspostComponent } from './painel/midia/face-curtidaspost/face-curtidaspost.component';
import { FaceCurtidasglobalComponent } from './painel/midia/face-curtidasglobal/face-curtidasglobal.component';
import { FaceCurtidaspaginaComponent } from './painel/midia/face-curtidaspagina/face-curtidaspagina.component';
import { FaceSeguidoresComponent } from './painel/midia/face-seguidores/face-seguidores.component';
import { YoutubeViewsComponent } from './painel/midia/youtube-views/youtube-views.component';
import { YoutubeLikesComponent } from './painel/midia/youtube-likes/youtube-likes.component';
import { YoutubeDislikesComponent } from './painel/midia/youtube-dislikes/youtube-dislikes.component';


@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    LoginComponent,
    RegistrarComponent,
    FoundsComponent,
    DashboardComponent,
    InstaCurtidasComponent,
    InstaSeguidoresComponent,
    InstaStoriesComponent,
    InstaComentariosComponent,
    FaceCurtidaspostComponent,
    FaceCurtidasglobalComponent,
    FaceCurtidaspaginaComponent,
    FaceSeguidoresComponent,
    YoutubeViewsComponent,
    YoutubeLikesComponent,
    YoutubeDislikesComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },
  { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
