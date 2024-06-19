import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UnitsService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<any> {
    return this.http.get(
      `https://university-manager-beta.onrender.com/departments/all`
    );
  }
  getUnitDetails(id: string): Observable<any> {
    return this.http.get(
      `https://university-manager-beta.onrender.com/department/${id}`
    );
  }
}
