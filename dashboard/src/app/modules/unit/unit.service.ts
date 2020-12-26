import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { createRequestOption } from 'src/app/shared/util/request-util';
import { IUnit } from 'src/app/shared/model/unit.model';
import { environment } from 'src/environments/environment';

type EntityResponseType = HttpResponse<IUnit>;
type EntityArrayResponseType = HttpResponse<IUnit[]>;

@Injectable({ providedIn: 'root' })
export class UnitService {
  public resourceUrl = environment.apiUrl + 'api/units';

  constructor(protected http: HttpClient) {}

  create(unit: IUnit): Observable<EntityResponseType> {
    return this.http.post<IUnit>(this.resourceUrl, unit, { observe: 'response' });
  }

  update(unit: IUnit): Observable<EntityResponseType> {
    return this.http.put<IUnit>(this.resourceUrl, unit, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IUnit>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IUnit[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
