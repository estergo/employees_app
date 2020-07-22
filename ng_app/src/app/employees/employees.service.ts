import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) {
  }

  get(limit: number, skip: number): Observable<any> {
    const params = {
      skip: skip.toString(),
      limit: limit.toString()
    }
    return this.http.get(`${baseUrl}/employee`, { params });
  }

  create(data: { name: String, Department: String }): Observable<any>{
    return this.http.post(`${baseUrl}/employee`, data);
  }

  delete(id: Number): Observable<any> {
    return this.http.delete(`${baseUrl}/employee/${id}`);
  }

  getDepartments(): Observable<any> {
    return this.http.get(`${baseUrl}/department`);
  }
}
