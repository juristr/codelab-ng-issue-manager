import { Component, OnInit } from '@angular/core';
import { IssuesService } from 'src/app/core/issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {
  issues$ = this.issuesService.fetchIssues();

  constructor(private issuesService: IssuesService) {}

  ngOnInit() {}
}
