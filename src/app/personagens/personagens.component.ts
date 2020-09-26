import { Component, OnInit } from '@angular/core';
import { ApiStarWarsService } from '../api-star-wars.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css'],
})
export class PersonagensComponent implements OnInit {
  constructor(private apiStarWars: ApiStarWarsService) {}

  personagens: Array<any> = new Array();

  ngOnInit() {
    this.listarPersonagens();
  }

  listarPersonagens() {
    this.apiStarWars.listarPersonagens().subscribe(personagem => {
        this.personagens = personagem.results;
        console.log(personagem.results);
      
      }, err => {
        console.log('Erro ao listar os personagens.', err);
      });
  }
}
