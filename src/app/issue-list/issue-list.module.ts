import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueListRoutingModule } from './issue-list-routing.module';
import { IssuesComponent } from './container/issues/issues.component';
import { SharedModule } from '../shared';
import { IssueDetailComponent } from './container/issue-detail/issue-detail.component';

@NgModule({
  declarations: [IssuesComponent, IssueDetailComponent],
  imports: [CommonModule, SharedModule, IssueListRoutingModule]
})
export class IssueListModule {}
