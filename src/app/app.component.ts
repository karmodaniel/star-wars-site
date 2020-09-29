import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'star-wars-site';
  toolbarAberta = false;
  cont = 1;

  ngOnInit(){
  }

  abrirToolbar() {
    this.toolbarAberta = true;
    if(this.cont % 2 == 0) {
      this.fecharToolbar();
    }
    this.cont++;
  }

  fecharToolbar() {
    this.toolbarAberta = false;
  }

  fecharToolbarNav(){
    this.toolbarAberta = false;
    this.cont = 1;
  }
}

  
