import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiStarWarsService } from '../api-star-wars.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonagemDialogComponent } from '../personagem-dialog/personagem-dialog.component';

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
    '../../assets/personagens/img-personagens/obi-wan-kenobi.png',
  ];

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    let cont = 0;
    this.apiStarWars.getPersonagens().subscribe(
      (personagem) => {
        this.personagens = personagem.results;
        for (let pers of this.personagens) {
          pers.img = this.imagens[cont];
          cont++;
        }
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
    console.log(this.destaques);
  }

  showDetails(personagem) {
    this.dialog.open(PersonagemDialogComponent, {
      data: {
        title: 'personagem',
        body: personagem,
      },
    });
  }
}
