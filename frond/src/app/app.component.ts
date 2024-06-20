import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TasksMenuComponent } from './tasks/tasks-menu/tasks-menu.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TasksMenuComponent,RouterLink,
    FormsModule , 
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prueba';
}
