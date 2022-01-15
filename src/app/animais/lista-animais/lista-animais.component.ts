import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animais } from '../animal';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {

  animais!: Animais
  
  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void { 
    this.activedRoute.params.subscribe(param => {
      this.animais = this.activedRoute.snapshot.data['animais']
    })
  }

}
