import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { IssuesService } from 'src/app/core/issues.service';
import { Observable } from 'rxjs';
import { Issue } from '../../../core';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss']
})
export class IssueDetailComponent implements OnInit {
  issue$: Observable<Issue>;

  constructor(
    private activeRoute: ActivatedRoute,
    private issuesService: IssuesService
  ) {}

  ngOnInit() {
    this.issue$ = this.activeRoute.params.pipe(
      map(params => +params['id']),
      switchMap(issueId => this.issuesService.fetchIssueById(issueId))
    );
  }
}
