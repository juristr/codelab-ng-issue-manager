import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuesComponent } from './container/issues/issues.component';
import { IssueDetailComponent } from './container/issue-detail/issue-detail.component';

const routes: Routes = [
  {
    path: '',
    component: IssuesComponent
  },
  {
    path: ':id',
    component: IssueDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssueListRoutingModule {}
