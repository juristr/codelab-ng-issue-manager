import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuesComponent } from './container/issues/issues.component';

const routes: Routes = [
  {
    path: 'issues',
    component: IssuesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssueListRoutingModule {}
