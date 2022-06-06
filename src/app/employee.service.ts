import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL = "http://localhost:8021/api/v1/";
  constructor(private httpClient: HttpClient) { }
     getEmployeeList(): Observable<Employee[]>{
       return this.httpClient.get<Employee[]>(`${this.baseURL}` + 'employees');
     }

     createEmployee(employee: Employee): Observable<Object>{
       return this.httpClient.post<any>(`${this.baseURL}` + 'employee',employee);
     }
    getEmployeeById(id:number):Observable<Employee>{
      return this.httpClient.get<Employee>(`${this.baseURL}`+'employee/'+`${id}`);
    }
    updateEmployee(id:number,employee: Employee):Observable<object>{
      return this.httpClient.put(`${this.baseURL}`+'employee/'+`${id}`,employee);
    }
    deleteEmployee(id:number):Observable<object>{
      return this.httpClient.delete(`${this.baseURL}`+'employee/'+`${id}`);
    }
}
