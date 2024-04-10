import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { RealisationComponent } from './pages/realisation/realisation.component';
import { BackgrowndComponent } from './components/backgrownd/backgrownd.component';
import { CompetencesComponent } from './pages/competences/competences.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RealuniallComponent } from './pages/realuni/realuniall/realuniall.component';
import { RealpersoallComponent } from './pages/realperso/realpersoall/realpersoall.component';
import { BlenderComponent } from './pages/realperso/blender/blender.component';
import { ModelsComponent } from './components/models/models.component';
import { AfficheICDComponent } from './pages/realperso/affiche-icd/affiche-icd.component';
import { AfficheAComponent } from './pages/realuni/affiche-a/affiche-a.component';
import { SliderAfficheComponent } from './components/slider-affiche/slider-affiche.component';
import { MagazineComponent } from './pages/realuni/magazine/magazine.component';
import { SliderMagazinComponent } from './components/slider-magazin/slider-magazin.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RealisationComponent,
    BackgrowndComponent,
    CompetencesComponent,
    ContactComponent,
    RealuniallComponent,
    RealpersoallComponent,
    BlenderComponent,
    ModelsComponent,
    AfficheICDComponent,
    AfficheAComponent,
    SliderAfficheComponent,
    MagazineComponent,
    SliderMagazinComponent,
  
 
   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
