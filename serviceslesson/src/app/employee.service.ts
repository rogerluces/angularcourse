import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }
  
  getEmployees(): Observable<IEmployee[]>{
      return this.http.get<IEmployee[]>(this._url);

    /*return [
      {"id": 1, "name":"Roger Luces", "age": 46, "active":true},
      {"id": 2, "name":"Jorge Ramirez", "age": 24, "active":true},
      {"id": 3, "name":"Jaime Aguilera", "age": 32, "active":true},
      {"id": 4, "name":"Seba Ahumada", "age": 28, "active":true},
      {"id": 5, "name":"Otro Ahi", "age": 55, "active":false},
    ];*/
  }
}
