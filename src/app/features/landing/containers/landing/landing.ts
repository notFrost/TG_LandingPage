import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

// import { Movie } from '../../models/movie';
// import { fromMoviesActions } from '../../store/movies.action';
// import { getAllMovies } from '../../store/movies.selector';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'gdp-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy {
breakpoint:any ="";
cols:any =2;
rowheight:any ="2:1";
countries:any =[
  {name:"Personas de tercera Edad",image:"assets/img/fisioterapia.png", content:"Te ayudamos a recuperarte. En Training Gain contamos con un personal capacitado dispuesto a hacer todo lo posible para ayudarte con tu recuperación."},
  {name:"Personas discapacitadas",image:"assets/img/paciente.png", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."},
  {name:"Te ayudamos a recuperarte",image:"assets/img/rehabilitacion (1).png", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."},
  {name:"Tu salud en confianza",image:"assets/img/rehabilitacion.png", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."},
]
personas:any =[
  {name:"Alex Rojas",image:"assets/img/fisioterapia.png", content:": Inscribirme en esta compañía me ha ayudado mucho a fortalecer mi cuerpo y poder llevar una vida más sana."},
  {name:"Alex Rojas",image:"assets/img/paciente.png", content:"Me siento con más energía que antes, gracias a Training Gain.."},
  {name:"Alex Rojas",image:"assets/img/rehabilitacion (1).png", content:"Tuve una lesión en la pierna derecha y la compañía Training Gain me ayudó a recuperarme rápidamente."},
  {name:"Alex Rojas",image:"assets/img/rehabilitacion.png", content:"Gracias a Training Gain me siento cada vez mejor, pues ellos me dan todas las facilidades para poder recuperarme."},
]
onResize(event) {
  this.breakpoint = (event.target.innerWidth >= 700) ? 4 : 1;
  this.rowheight = (event.target.innerWidth >= 700) ? "2:1" : "1:1";
  this.cols = (event.target.innerWidth >= 700)? 2:1;
}
  constructor(
    private store: Store<any>,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth >= 700) ? 4 : 1;
    this.rowheight = (window.innerWidth >= 700) ? "2:1" : "1:1";
    this.cols = (window.innerWidth >= 700)? 2:1;
  }
  ngOnDestroy(): void {
  }

  resize(){
    this.breakpoint = (window.innerWidth >= 700) ? 2:1;
    this.rowheight = (window.innerWidth >= 700) ? "2:1" : "1:1";
    this.cols = (window.innerWidth >= 700)? 2:1;
  }

}
