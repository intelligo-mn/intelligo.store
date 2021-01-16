import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IStatistic } from 'src/app/shared/model/dashboard.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  public apiUrl = environment.apiUrl + 'api/dashboard';

  constructor(protected http: HttpClient) {}

  getStatistic(): Observable<HttpResponse<IStatistic>> {
    return this.http
      .get(`${this.apiUrl}/statistic`, { observe: 'response' })
      .pipe(map((res: HttpResponse<IStatistic>) => res));
  }
}
