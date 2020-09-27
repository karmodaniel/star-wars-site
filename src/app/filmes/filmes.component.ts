import { Component, OnInit } from '@angular/core';
import { ApiStarWarsService } from '../api-star-wars.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  filmes: Array<any> = new Array();
  imagens = [
    "../../assets/filmes/uma-nova-esperanca.jpg",
    "../../assets/filmes/imperio-contra-ataca.jpg",
    "../../assets/filmes/retorno-de-jedi.jpg",
    "../../assets/filmes/card-ameaça-fantasma.jpg",
    "../../assets/filmes/card-ataque-dos-clones.jpg",
    "../../assets/filmes/card-a-vinganca-dos-sith.jpg"
  ];

  constructor( private apiStarWars: ApiStarWarsService) { }

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
        console.log(this.filmes);
      },
      (err) => {
        console.log('Erro ao listar os personagens.', err);
      }
    );
  }


}
