import { Component, OnInit } from '@angular/core';
import { ApiStarWarsService } from '../api-star-wars.service';
import { DetalhesDialogComponent } from '../detalhes-dialog/detalhes-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css'],
})
export class FilmesComponent implements OnInit {
  filmes: Array<any> = new Array();
  prequels: Array<any> = new Array();
  imagens = [
    '../../assets/filmes/uma-nova-esperanca.jpg',
    '../../assets/filmes/imperio-contra-ataca.jpg',
    '../../assets/filmes/retorno-de-jedi.jpg',
    '../../assets/filmes/card-ameaça-fantasma.jpg',
    '../../assets/filmes/card-ataque-dos-clones.jpg',
    '../../assets/filmes/card-a-vinganca-dos-sith.jpg',
  ];

  constructor(
    private apiStarWars: ApiStarWarsService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.fetchDataFilmes();
  }

  fetchDataFilmes() {
    let cont = 0;
    this.apiStarWars.getFilmes().subscribe(
      (personagem) => {
        this.filmes = personagem.results;
        for (let filme of this.filmes) {
          filme.img = this.imagens[cont];
          cont++;
        }
        this.triologiaPrequels();
        console.log(this.filmes);
      },
      (err) => {
        console.log('Erro ao listar os personagens.', err);
      }
    );
  }

  triologiaPrequels() {
    let cont = 0;
    for (let i = 0; i <= 5; i++) {
      if (i > 2) {
        this.prequels[cont] = this.filmes[i];
        cont++;
      }
    }
  }

  showDetails(filme) {
    this.dialog.open(DetalhesDialogComponent, {
      data: {
        title: 'filme',
        body: filme,
      },
    });
  }
}
