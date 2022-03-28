import { Task } from './../task';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CompiutiComponent } from '../compiuti/compiuti.component';
import { Input } from '@angular/core';


import { leggi } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  completed: boolean= false


  taskList:Task[]=[]
newTodoForm = this.formBuilder.group({todoItem: ''})


  constructor(
    private formBuilder: FormBuilder
    ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

   addTask(){
     const value=this.newTodoForm.value.todoItem
     this.taskList.push({id:this.taskList.length, title:value, completed:true})
     console.log(this.taskList)
   }


  markDone(value: any) {
      value.completed = !value.completed
      value.completed === true ?
        this.taskList.push(this.taskList.splice(this.taskList.indexOf(value), 1)[0]) :
        this.taskList.unshift(this.taskList.splice(this.taskList.indexOf(value), 1)[0])
        console.log(this.taskList)
    }
    removeTask(i: any) {
      this.taskList.splice(i, 1)
      window.localStorage.setItem('task', JSON.stringify(this.taskList))

    }



}
