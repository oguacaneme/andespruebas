import { Component, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { DataTaksService } from '../../Services/data-taks.service';
import {NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Taskmodel } from '../../Models/taskmodel';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})



export class TasksListComponent implements OnInit{
  tasks: Taskmodel[] = [];

  datasend : any[] = [];


  constructor(private dataServicetaks: DataTaksService
    ,private router: Router
  ) {}

  ngOnInit(): void {
   this.loadlist()
  }

  onSubmitupdate(id: any){  
    console.log('Task added successfully');
    let task = { idtarea: id, completada: true };
    this.dataServicetaks.updateDataTaks(task).subscribe(() => {
      this.loadlist()

    });


  }

  loadlist(){
    this.dataServicetaks.getDatatasks().subscribe((response: Taskmodel[]) => {           
      this.tasks = response;
      console.log("el respnse es :" + this.tasks); 
    });


  }


  reloadComponent() {
    this.router.navigateByUrl('taskslist'); 
  }

}
