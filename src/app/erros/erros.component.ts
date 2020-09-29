import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-erros',
  templateUrl: './erros.component.html',
  styleUrls: ['./erros.component.css'],
})
export class ErrosComponent implements OnInit {
  
  constructor(private erroMsg: MatSnackBar) {}

  ngOnInit() {}

  openMensagemErro() {
    this.erroMsg.openFromComponent(ErrosComponent, {
      duration: 5000,
    });
  }

  closeMensagemErro() {
    this.erroMsg.dismiss();
  }
}
