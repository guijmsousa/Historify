import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaPessoalComponent } from './area-pessoal/area-pessoal.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path: 'area-pessoal', component: AreaPessoalComponent},
{path: 'contactos', component: ContactosComponent},
{path: 'home-page', component: HomePageComponent},
{path: 'sobre-nos', component: SobreNosComponent},
{path: 'sugestoes', component: SugestoesComponent},
{path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
