import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { PersonagensComponent } from './personagens/personagens.component';
import { ApiStarWarsService } from './api-star-wars.service';
import { PersonagemDialogComponent } from './personagem-dialog/personagem-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { FilmesComponent } from './filmes/filmes.component';
import { PlanetasComponent } from './planetas/planetas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonagensComponent,
    PersonagemDialogComponent,
    FilmesComponent,
    PlanetasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    HttpClientModule,
    MatDialogModule,
    MatDividerModule
  ],
  providers: [ApiStarWarsService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
