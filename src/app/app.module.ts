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


@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    LoginComponent,
    RegistrarComponent,
    FoundsComponent,
    DashboardComponent,
    InstaCurtidasComponent,
    InstaSeguidoresComponent
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
