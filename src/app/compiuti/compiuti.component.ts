import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { leggi } from '../todo.service';

@Component({
  selector: 'app-compiuti',
  templateUrl: './compiuti.component.html',
  styleUrls: ['./compiuti.component.scss']
})
export class CompiutiComponent implements OnInit {
  taskList!:Task[]

  constructor() {
    leggi().then((task)=> {
      //this.taskList= task
    })
   }

  ngOnInit(): void {

  }

}
