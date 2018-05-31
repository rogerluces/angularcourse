import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id": 1, "name":"Roger Luces", "age": 46, "active":true},
      {"id": 2, "name":"Jorge Ramirez", "age": 24, "active":true},
      {"id": 3, "name":"Jaime Aguilera", "age": 32, "active":true},
      {"id": 4, "name":"Seba Ahumada", "age": 28, "active":true},
      {"id": 5, "name":"Otro Ahi", "age": 55, "active":false},
    ];
  }
}
