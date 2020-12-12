import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { SERVER_API_URL } from 'src/app/app.constants';
import { createRequestOption } from 'src/app/shared/util/request-util';
import { IOrderPack } from 'src/app/shared/model/order-pack.model';

type EntityResponseType = HttpResponse<IOrderPack>;
type EntityArrayResponseType = HttpResponse<IOrderPack[]>;

@Injectable({ providedIn: 'root' })
export class OrderPackService {
  public resourceUrl = SERVER_API_URL + 'api/order-packs';

  constructor(protected http: HttpClient) {}

  create(orderPack: IOrderPack): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(orderPack);
    return this.http
      .post<IOrderPack>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(orderPack: IOrderPack): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(orderPack);
    return this.http
      .put<IOrderPack>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IOrderPack>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IOrderPack[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(orderPack: IOrderPack): IOrderPack {
    const copy: IOrderPack = Object.assign({}, orderPack, {
      startDate: orderPack.startDate && orderPack.startDate.isValid() ? orderPack.startDate.toJSON() : undefined,
      endDate: orderPack.endDate && orderPack.endDate.isValid() ? orderPack.endDate.toJSON() : undefined
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.startDate = res.body.startDate ? moment(res.body.startDate) : undefined;
      res.body.endDate = res.body.endDate ? moment(res.body.endDate) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((orderPack: IOrderPack) => {
        orderPack.startDate = orderPack.startDate ? moment(orderPack.startDate) : undefined;
        orderPack.endDate = orderPack.endDate ? moment(orderPack.endDate) : undefined;
      });
    }
    return res;
  }
}
