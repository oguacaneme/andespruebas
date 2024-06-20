import { Component } from '@angular/core';
import {NgForm, FormsModule } from '@angular/forms';
import { Taskmodel } from '../../Models/taskmodel';
import { DataTaksService } from '../../Services/data-taks.service';

@Component({
  selector: 'app-tasks-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tasks-add.component.html',
  styleUrl: './tasks-add.component.scss'
})
export class TasksAddComponent  {


  constructor(private dataTaksService: DataTaksService) {}

  newTask: Taskmodel = {
    idTarea: 0,
    titulo: '',
    descripcion: '',
    fechaVencimiento: new Date(),
    completada: false
  };
  
  public onSubmit()
    {

      this.dataTaksService.addDataTaks(this.newTask).subscribe(() => {
        console.log('Task added successfully');
        this.resetForm();
      });


    }

    resetForm() {
      this.newTask = {
        idTarea: 0,
        titulo: '',
        descripcion: '',
        fechaVencimiento: new Date(),
        completada: false
      };
    }

}
