import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Taskmodel } from '../Models/taskmodel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataTaksService {

  private apiUrl = 'http://localhost:5001/datatasks';


  constructor(private http: HttpClient) {}

  getDatatasks(): Observable<any> {
    //return this.http.get(this.apiUrl);

    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data => data.map(item => ({
        idTarea: item[0],
        titulo: item[1],
        descripcion: item[2],
        fechaVencimiento: item[3],
        completada: item[4] === 1
      })))
    );
  
  }
  addDataTaks(data: Taskmodel): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateDataTaks(data: any): Observable<any> {
    return this.http.post(this.apiUrl+"/update", data);
  }


}                                                                                             
