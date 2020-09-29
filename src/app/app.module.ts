import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { PersonagensComponent } from './personagens/personagens.component';
import { ApiStarWarsService } from './api-star-wars.service';
import { DetalhesDialogComponent } from './detalhes-dialog/detalhes-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { FilmesComponent } from './filmes/filmes.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { NavesComponent } from './naves/naves.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  NgxUiLoaderHttpModule,
} from 'ngx-ui-loader';
import { ErrosComponent } from './erros/erros.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: "rgba(255,255,255,0)",
  overlayColor: "rgba(255,255,255,0)",
  pbColor: "#ffe800",
  pbDirection: "ltr",
  pbThickness: 5,
  hasProgressBar: true,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonagensComponent,
    DetalhesDialogComponent,
    FilmesComponent,
    PlanetasComponent,
    NavesComponent,
    ErrosComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    HttpClientModule,
    MatDialogModule,
    MatDividerModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    MatToolbarModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [ApiStarWarsService, HttpClientModule, ErrosComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
