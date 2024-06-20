import { Routes } from '@angular/router';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TasksAddComponent } from './tasks/tasks-add/tasks-add.component';
export const routes: Routes = [

    {
        path:'taskslist',
        component:TasksListComponent
    },
    {
        path:'taskadd',
        component:TasksAddComponent
    },


    


];
