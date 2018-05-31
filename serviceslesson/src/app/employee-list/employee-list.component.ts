import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
  <h2>Lista de Empleados</h2>
  <table width="500" border="1" style="margin:auto">
    <tr><td>Nombre</td></tr>
    <tr *ngFor="let emp of employees">
    <td>{{emp.name}}</td>
   </tr>
  </table>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService: EmployeeService){ }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
