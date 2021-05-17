import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient,  @Inject('BASE_URL') private baseUrl: string) { }

  get(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + 'api/employees');
  }

  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + 'api/employees/'+id);
  }

  post(employee: Employee): Observable<Employee[]> {
    return this.http.post<Employee[]>(this.baseUrl + 'api/employees', employee);
  }

  put(employee: Employee): Observable<Employee[]> {
    return this.http.put<Employee[]>(this.baseUrl + 'api/employee/'+employee.id, employee);
  }

  delete(id: number): Observable<Employee[]> {
    return this.http.delete<Employee[]>(this.baseUrl + 'api/employee/'+id);
  }

}
