import { Component, OnInit } from '@angular/core';
import { ApiStarWarsService } from '../api-star-wars.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {
  planets: Array<any> = new Array();
  imagens = [
    '../../assets/planetas/alderaan.png',
    '../../assets/planetas/bespin.jpg',
    '../../assets/planetas/coruscant.png',
    '../../assets/planetas/dagobah.jpg',
    '../../assets/planetas/endor.png',
    '../../assets/planetas/hoth.jpg',
    '../../assets/planetas/kamino.png',
    '../../assets/planetas/naboo.png',
    '../../assets/planetas/tatooine-card.png',
    '../../assets/planetas/yavin-4.png'
  ];

  constructor(private apiStarWars: ApiStarWarsService) { }

  ngOnInit() {
    this.fetchDataPlanetas();
  }

  fetchDataPlanetas() {
    let cont = 0;
    this.apiStarWars.getPlanetas().subscribe(
      (planetas) => {
        this.planets = planetas.results;
        for (let planet of this.planets) {
          planet.img = this.imagens[cont];
          cont++;
        }
        console.log(this.planets);
      },
      (err) => {
        console.log('Erro ao listar os personagens.', err);
      }
    );
  }

}
