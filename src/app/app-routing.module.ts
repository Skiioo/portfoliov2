import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { RealisationComponent } from './pages/realisation/realisation.component';
import { CompetencesComponent } from './pages/competences/competences.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RealpersoallComponent } from './pages/realperso/realpersoall/realpersoall.component';
import { RealuniallComponent } from './pages/realuni/realuniall/realuniall.component';
import { BlenderComponent } from './pages/realperso/blender/blender.component';
import { ModelsComponent } from './components/models/models.component';
import { AfficheICDComponent } from './pages/realperso/affiche-icd/affiche-icd.component';
import { AfficheAComponent } from './pages/realuni/affiche-a/affiche-a.component';
import { MagazineComponent } from './pages/realuni/magazine/magazine.component';



const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'realisation', component: RealisationComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'realpersoall', component: RealpersoallComponent },
  { path: 'realuniall', component: RealuniallComponent },
  { path: 'blender', component: BlenderComponent },
  { path: 'model', component: ModelsComponent },
  { path: 'affiche-icd', component: AfficheICDComponent },
  { path: 'affiche-a', component: AfficheAComponent },
  { path: 'magazine', component: MagazineComponent },
  


  { path: '', redirectTo: '/home', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
