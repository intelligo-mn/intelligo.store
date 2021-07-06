import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createRequestOption } from '../util/request-util';

@Injectable({ providedIn: 'root' })
export class DeleteService {
  constructor(protected http: HttpClient) {}

  delete(id: number, resourceUrl: string, queryParam: boolean): Observable<HttpResponse<any>> {
    const url = queryParam ? resourceUrl : `${resourceUrl}/${id}`,
      options: any = queryParam ? createRequestOption({ requestId: id }) : null;
    return this.http.delete<any>(url, { observe: 'response', params: options });
  }
}
