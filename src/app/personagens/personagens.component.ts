import { Component, OnInit } from '@angular/core';
import { ApiStarWarsService } from '../api-star-wars.service';
import { MatDialog } from '@angular/material/dialog';
import { DetalhesDialogComponent } from '../detalhes-dialog/detalhes-dialog.component';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css'],
})
export class PersonagensComponent implements OnInit {
  constructor(
    private apiStarWars: ApiStarWarsService,
    public dialog: MatDialog
  ) {}

  personagens: Array<any> = new Array();
  destaques: Array<any> = new Array();
  isActivate = false;
  id: number;
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
    '../../assets/personagens/img-personagens/obi-wan-kenobi.png',
  ];

  classe = [
  'rebellion',
  'rebellion',
  'rebellion',
  'empire',
  'rebellion',
  'neutral',
  'neutral',
  'neutral',
  'rebellion',
  'neutral',
  ];

  ngOnInit() {
    window.scroll(0, 0);
    this.fetchData();
  }

  fetchData() {
    this.apiStarWars.getPersonagens().subscribe(
      (personagem) => {
        this.personagens = personagem.results;
        this.addNoPersonagem();
        this.persongensDestaque();
        console.log(this.personagens);
      },
      (err) => {
        console.log('Erro ao listar os personagens.', err);
      }
    );
  }

  persongensDestaque() {
    for (let i = 0; i <= 3; i++) {
      this.destaques[i] = this.personagens[i];
    }
  }

  addNoPersonagem(){
    let cont = 0;
    for (let pers of this.personagens) {
      pers.img = this.imagens[cont];
      pers.class = this.classe[cont];
      cont++;
  }
}

  showDetails(personagem) {
    this.dialog.open(DetalhesDialogComponent, {
      data: {
        title: 'personagem',
        body: personagem,
      },
    });
  }
}
