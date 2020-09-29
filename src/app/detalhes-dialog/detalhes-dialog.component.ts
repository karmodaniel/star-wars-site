import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalhes-dialog',
  templateUrl: './detalhes-dialog.component.html',
  styleUrls: ['./detalhes-dialog.component.css'],
})
export class DetalhesDialogComponent implements OnInit {
  tipo: any;
  body: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.tipo = data.title;
    this.body = data.body;
  }

  ngOnInit(): void {}
}
