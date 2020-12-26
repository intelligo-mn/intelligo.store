import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrganization } from 'src/app/shared/model/organization.model';
import { createRequestOption } from 'src/app/shared/util/request-util';
import { environment } from 'src/environments/environment';

type EntityResponseType = HttpResponse<IOrganization>;
type EntityArrayResponseType = HttpResponse<IOrganization[]>;

@Injectable({ providedIn: 'root' })
export class OrganizationService {
  public resourceUrl = environment.apiUrl + 'api/organizations';

  constructor(protected http: HttpClient) {}

  create(organization: IOrganization): Observable<EntityResponseType> {
    return this.http.post<IOrganization>(this.resourceUrl, organization, { observe: 'response' });
  }

  update(organization: IOrganization): Observable<EntityResponseType> {
    return this.http.put<IOrganization>(this.resourceUrl, organization, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IOrganization>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IOrganization[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
