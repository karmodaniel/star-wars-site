import { Component, OnInit } from '@angular/core';
import { ApiStarWarsService } from '../api-star-wars.service';
import { DetalhesDialogComponent } from '../detalhes-dialog/detalhes-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css'],
})
export class NavesComponent implements OnInit {
  naves: Array<any> = new Array();
  imagens = [
    '../../assets/naves/cr-90-corvette.png',
    '../../assets/naves/star-destryer.png',
    '../../assets/naves/sentinela.jpg',
    '../../assets/naves/daeth-star.png',
    '../../assets/naves/millenium-falcon.png',
    '../../assets/naves/y-wing.png',
    '../../assets/naves/x-wing.png',
    '../../assets/naves/tie-advance.png',
    '../../assets/naves/executor.png',
    '../../assets/naves/rebel-transport.png',
  ];
  buscarNaves: any;

  constructor(
    private apiStarWars: ApiStarWarsService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    this.fetchDataPlanetas();
  }

  fetchDataPlanetas() {
    this.apiStarWars.getNaves().subscribe(
      (espacoNaves) => {
        this.naves = espacoNaves.results;
        this.addImagem();
      },
      (err) => {
        console.log('Erro ao listar os personagens.', err);
      }
    );
  }

  addImagem() {
    let cont = 0;
    for (let ship of this.naves) {
      ship.img = this.imagens[cont];
      cont++;
    }
  }

  showDetails(plan) {
    console.log(plan);
    this.dialog.open(DetalhesDialogComponent, {
      data: {
        title: 'nave',
        body: plan,
      },
    });
  }

  buscarEspacoNaves() {
    if(this.buscarNaves != "") {
      this.naves = this.naves.filter(res => {
        console.log(res.name.toLocaleLowerCase().match(this.buscarNaves.toLocaleLowerCase()));
        return (res.name.toLocaleLowerCase().match(this.buscarNaves.toLocaleLowerCase()));
      })    
    }else if (this.buscarNaves == ""){
      this.ngOnInit();
    }
  }
}
