import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { IssuesService } from 'src/app/core/issues.service';
import { Observable } from 'rxjs';
import { Issue } from '../../../core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss']
})
export class IssueDetailComponent implements OnInit {
  private issue: Issue;
  form = new FormGroup({
    title: new FormControl(),
    description: new FormControl()
  });

  constructor(
    private activeRoute: ActivatedRoute,
    private issuesService: IssuesService
  ) {}

  ngOnInit() {
    this.activeRoute.params
      .pipe(
        map(params => +params['id']),
        switchMap(issueId => this.issuesService.fetchIssueById(issueId))
      )
      .subscribe(issueDetail => {
        this.issue = issueDetail;
        this.form.patchValue(issueDetail);
      });
  }

  onSubmit({ valid, value }) {
    if (valid) {
      this.issuesService
        .saveIssue({
          ...this.issue,
          ...value
        })
        .subscribe(x => {
          alert('Successfully saved');
        });
    } else {
      alert('form not valid');
    }
  }
}
