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

  fetchIssueById(id: number) {
    return this.http.get<Issue>(`/api/issues/${id}`);
  }

  saveIssue(issue: Issue): Observable<Issue> {
    if (issue.id && issue.id > 0) {
      return this.http.put<Issue>(`/api/issues/${issue.id}`, issue);
    } else {
      return this.http.post<Issue>(`/api/issues`, issue);
    }
  }
}
