import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaPessoalComponent } from './area-pessoal/area-pessoal.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { ContactosComponent } from './contactos/contactos.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaPessoalComponent,
    SugestoesComponent,
    HomePageComponent,
    SobreNosComponent,
    BarraNavegacaoComponent,
    ContactosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
