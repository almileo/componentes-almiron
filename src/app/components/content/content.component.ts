import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Interfaces/Student.interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public students: Array<Student> = [
    {name: 'Alan', lastName: 'Sanchez', isActive: true, courses: []},
    {name: 'Rosa', lastName: 'Mejia', isActive: true, courses: []},
    {name: 'Juan', lastName: 'Perez', isActive: true, courses: []},
    {name: 'Andres', lastName: 'Filgueira', isActive: false, courses: []},
    {name: 'Luciana', lastName: 'Padua', isActive: true, courses: []},
  ]

  constructor() { }

  ngOnInit() {
  }

  public addCourse() {
    console.log('Abre modal para agrear curso');
    window.alert('Datos para agregar curso')
  }

  public activateStudent(){
    console.log('Activa estudiante');
    window.alert('Activa estudiante')
  }

}
