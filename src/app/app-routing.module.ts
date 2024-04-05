import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { RealisationComponent } from './pages/realisation/realisation.component';
import { CompetencesComponent } from './pages/competences/competences.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'realisation', component: RealisationComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'contact', component: ContactComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
