import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-personagem-dialog',
  templateUrl: './personagem-dialog.component.html',
  styleUrls: ['./personagem-dialog.component.css'],
})
export class PersonagemDialogComponent implements OnInit {
  tipo: any;
  body: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.tipo = data.title;
    this.body = data.body;
  }

  ngOnInit(): void {}
}
