import { Component, OnInit } from '@angular/core';
import { ApiStarWarsService } from '../api-star-wars.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css'],
})
export class PersonagensComponent implements OnInit {
  constructor(private apiStarWars: ApiStarWarsService) {}

  personagens: Array<any> = new Array;
  isActivate: Boolean = false;
  id: Number;
  imagens = [
    '../../assets/personagens/img-personagens/luke-skywalker.png',
    '../../assets/personagens/img-personagens/c3po.png',
    '../../assets/personagens/img-personagens/r2-d2.png',
    '../../assets/personagens/img-personagens/dath-vader.png',
    '../../assets/personagens/img-personagens/leia-organa.png',
    '../../assets/personagens/img-personagens/owen-lars.png',
    '../../assets/personagens/img-personagens/beru-whitesun.png',
    '../../assets/personagens/img-personagens/r5-d4.png',
    '../../assets/personagens/img-personagens/biggs-darklighter.png',
    '../../assets/personagens/img-personagens/obi-wan-kenobi.png'

  ];

  ngOnInit() {
    this.updatePersonagens(this.imagens);
  }

  

  updatePersonagens(value) {
    this.apiStarWars.getPersonagens().subscribe(
      (personagem) => {
        this.personagens = personagem.results;
        this.addImagens(value);
        console.log(this.personagens);
      },
      (err) => {
        console.log('Erro ao listar os personagens.', err);
      }
    );
  }

  addImagens(imagem) {
    let cont = 0;
    for (let pers of this.personagens) {
      pers.img = imagem[cont];
      cont++;
    }
  }

  getId(index) {
    this.id = index;
    this.isActivate = true;
    console.log(this.isActivate);
    console.log(this.id);
  }


  
}
