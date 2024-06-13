import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UnitsService {
  constructor(private http: HttpClient) {}
  baseUrl: string = 'https://university-manager-9obj.onrender.com/';

  getAllUnits(): Observable<any> {
    // return this.http.get(`${this.baseUrl}departments/all`);
    return this.http.get(
      `https://hotels-com-free.p.rapidapi.com/suggest/v1.7/json`,
      {
        headers: {
          'X-RapidAPI-Key':
            '50f5894854mshf087524ccadf859p19e1cbjsn0dcf8530f185',
          'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
        },
      }
    );
  }
}
