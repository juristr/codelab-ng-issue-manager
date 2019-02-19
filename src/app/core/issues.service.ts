import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  constructor() {}

  fetchIssues(): Observable<Issue[]> {
    return of([
      {
        title: 'Issue 1',
        description: 'Description of issue 1'
      },
      {
        title: 'Issue 2',
        description: 'Description of issue 2'
      }
    ]);
  }
}
