import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private http: HttpClient) { }


  get(): Observable<Employee[]> {
    return this.http.get<Employee[]>(environment.baseUrl + 'api/employees');
  }

  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(environment.baseUrl + 'api/employees/'+id);
  }

  post(employee: Employee): Observable<Employee[]> {
    return this.http.post<Employee[]>(environment.baseUrl + 'api/employees', employee);
  }

  put(employee: Employee): Observable<Employee[]> {
    return this.http.put<Employee[]>(environment.baseUrl + 'api/employees/'+employee.id, employee);
  }

  delete(id: number): Observable<Employee[]> {
    return this.http.delete<Employee[]>(environment.baseUrl + 'api/employees/'+id);
  }

}
