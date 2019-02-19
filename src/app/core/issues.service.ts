import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Issue } from './issue';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  constructor(private http: HttpClient) {}

  fetchIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>('/api/issues');
  }
}
