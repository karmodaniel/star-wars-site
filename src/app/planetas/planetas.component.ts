import { Component, OnInit } from '@angular/core';
import { ApiStarWarsService } from '../api-star-wars.service';
import { DetalhesDialogComponent } from '../detalhes-dialog/detalhes-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css'],
})
export class PlanetasComponent implements OnInit {
  planets: Array<any> = new Array();
  imagens = [
    '../../assets/planetas/tatoooine.jpg',
    '../../assets/planetas/alderaan.png',
    '../../assets/planetas/yavin-4.png',
    '../../assets/planetas/hoth.jpg',
    '../../assets/planetas/dagobah.jpg',
    '../../assets/planetas/bespin.jpg',
    '../../assets/planetas/endor.png',
    '../../assets/planetas/naboo.png',
    '../../assets/planetas/coruscant.png',
    '../../assets/planetas/kamino.png',
  ];
  buscarPlanetas: any;

  constructor(
    private apiStarWars: ApiStarWarsService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
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
      },
      (err) => {
        console.log('Erro ao listar os personagens.', err);
      }
    );
  }

  showDetails(planeta) {
    this.dialog.open(DetalhesDialogComponent, {
      data: {
        title: 'planeta',
        body: planeta,
      },
    });
  }

  buscarPlan() {
    if(this.buscarPlanetas != "") {
      this.planets = this.planets.filter(res => {
        console.log(res.name.toLocaleLowerCase().match(this.buscarPlanetas.toLocaleLowerCase()));
        return (res.name.toLocaleLowerCase().match(this.buscarPlanetas.toLocaleLowerCase()));
      })    
    }else if (this.buscarPlanetas == ""){
      this.ngOnInit();
    }
  }
}
