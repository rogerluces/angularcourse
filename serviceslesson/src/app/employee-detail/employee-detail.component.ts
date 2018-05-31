import { Component, OnInit,  } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h2>Detalle de Empleados</h2>
  <table width="500" border="1" style="margin:auto">
    <tr><td>Id</td><td>Nombre</td><td>Edad</td><td>Activo</td></tr>
    <tr *ngFor="let emp of employees">
    <td>{{emp.id}}</td><td>{{emp.name}}</td><td>{{emp.age}}</td>
    <td>
      <input type="checkbox" [checked]="emp.active">
    </td>
   </tr>
  </table>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {
  public tickea = false;
  public employees = [];

  constructor(private _employeeService: EmployeeService){ }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
