import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HNAPIService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "https://node-hnapi.herokuapp.com";
  }
  fetchStories(storyType: string, page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${storyType}?page=${page}`);
  }
  fetchItem(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/item/${id}.json`);
  }
  fetchComments(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/item/${id}`);
  }
}
